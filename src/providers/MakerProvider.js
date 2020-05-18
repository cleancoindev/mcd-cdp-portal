import React, { createContext, useState, useEffect, useCallback } from 'react';
import { useNavigation as useNavigationBase } from 'react-navi';
import { mixpanelIdentify } from '../utils/analytics';
import { instantiateTaker } from '../taker';
import PropTypes from 'prop-types';
import {
  checkEthereumProvider,
  browserEthereumProviderAddress
} from '../utils/ethereum';
import LoadingLayout from '../layouts/LoadingLayout';
import schemas from '@takertao/tao-plugin-mcd/dist/schemas';
import useObservable, { watch } from 'hooks/useObservable';
import debug from 'debug';
const log = debug('taker:MakerProvider');

export const MakerObjectContext = createContext();

function useNavigation(network, mocks) {
  if (network === 'testnet' && mocks) return mocks.navigation;
  return useNavigationBase(); // eslint-disable-line react-hooks/rules-of-hooks
}

function MakerProvider({
  children,
  network,
  testchainId,
  backendEnv,
  viewedAddress,
  mocks
}) {
  const [account, setAccount] = useState(null);
  const [txLastUpdate, setTxLastUpdate] = useState({});
  const [taker, setTaker] = useState(null);
  const [watcher, setWatcher] = useState(null);
  const navigation = useNavigation(network, mocks);
  const initAccount = account => {
    mixpanelIdentify(account.address, account.type);
    setAccount({ ...account });
  };

  const connectBrowserProvider = useCallback(async () => {
    const networkId = taker.service('web3').networkId();
    const browserProvider = await checkEthereumProvider();

    function getMatchedAccount(address) {
      return taker
        .listAccounts()
        .find(acc => acc.address.toUpperCase() === address.toUpperCase());
    }

    if (browserProvider.networkId !== networkId)
      throw new Error(
        'browser ethereum provider and URL network param do not match.'
      );

    if (
      !browserProvider.address ||
      !browserProvider.address.match(/^0x[a-fA-F0-9]{40}$/)
    )
      throw new Error(
        'browser ethereum provider providing incorrect or non-existent address'
      );

    let existingAccount;
    if (taker.service('accounts').hasAccount()) {
      existingAccount = getMatchedAccount(browserProvider.address);
      if (existingAccount) {
        log(`Using existing SDK account: ${existingAccount.address}`);
        taker.useAccountWithAddress(existingAccount.address);
      }
    }
    if (!existingAccount) {
      log('Adding new browser account to SDK');
      await taker.addAccount({
        type: 'browser',
        autoSwitch: true
      });
    }

    const connectedAddress = taker.currentAddress();
    return connectedAddress;
  }, [taker]);

  useEffect(() => {
    (async () => {
      const newMaker = await instantiateMaker({
        network,
        testchainId,
        backendEnv,
        navigation
      });

      // Register multicall schemas and map useObservable hook to watch convenience helper
      const multicall = newMaker.service('multicall');
      multicall.registerSchemas({ ...schemas });
      multicall.observableKeys.forEach(
        key => (watch[key] = (...args) => useObservable(key, ...args)) // eslint-disable-line react-hooks/rules-of-hooks
      );
      // Create and start multicall watcher
      const watcher = multicall.createWatcher({ interval: 'block' });
      multicall.start();
      setWatcher(watcher);
      setMaker(newMaker);

      log('Initialized taker instance');
    })();
    // leaving taker out of the deps because it would create an infinite loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [backendEnv, network, testchainId]);

  useEffect(() => {
    if (!taker) return;
    if (taker.service('accounts').hasAccount()) {
      initAccount(taker.currentAccount());
    } else {
      // Reconnect browser provider if active address matches last connected
      const lastType = sessionStorage.getItem('lastConnectedWalletType');
      if (lastType === 'browser') {
        const lastAddress = sessionStorage.getItem(
          'lastConnectedWalletAddress'
        );
        browserEthereumProviderAddress().then(activeAddress => {
          if (activeAddress === lastAddress) {
            log(
              `Reconnecting address: ${activeAddress} (matches last connected wallet address)`
            );
            connectBrowserProvider();
          }
        });
      }
    }

    taker.on('accounts/CHANGE', eventObj => {
      const { account } = eventObj.payload;
      sessionStorage.setItem('lastConnectedWalletType', account.type);
      sessionStorage.setItem(
        'lastConnectedWalletAddress',
        account.address.toLowerCase()
      );
      log(`Account changed to: ${account.address}`);
      initAccount(account);
    });

    const txManagerSub = taker
      .service('transactionManager')
      .onTransactionUpdate((tx, state) => {
        if (state === 'mined') {
          const id = tx.metadata?.id;
          if (id) {
            log(`Resetting event history cache for Vault #${id}`);
            taker.service('mcd:cdpManager').resetEventHistoryCache(id);
            setTxLastUpdate(current => ({ ...current, [id]: Date.now() }));
          } else if (tx.metadata?.contract === 'PROXY_ACTIONS_DSR') {
            log('Resetting savings event history cache');
            taker.service('mcd:savings').resetEventHistoryCache();
            setTxLastUpdate(current => ({ ...current, save: Date.now() }));
          }
        }
        log('Tx ' + state, tx.metadata);
      });
    return () => {
      txManagerSub.unsub();
    };
  }, [taker, connectBrowserProvider]);

  return (
    <MakerObjectContext.Provider
      value={{
        taker,
        watcher,
        account,
        network,
        txLastUpdate,
        connectBrowserProvider,
        viewedAddress,
        navigation
      }}
    >
      {taker ? children : <LoadingLayout />}
    </MakerObjectContext.Provider>
  );
}

MakerProvider.propTypes = {
  network: PropTypes.string.isRequired
};

export default MakerProvider;
