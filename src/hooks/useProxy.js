import { useEffect, useState } from 'react';
import useActionState from 'hooks/useActionState';
import useTaker from 'hooks/useTaker';
import { watch } from 'hooks/useObservable';
import usePrevious from 'hooks/usePrevious';
import debug from 'debug';
const log = debug('maker:useProxy');

export default function useProxy() {
  const { taker, account } = useTaker();
  const [startedWithoutProxy, setStartedWithoutProxy] = useState(false);
  const [startingBlockHeight, setStartingBlockHeight] = useState(0);
  const [proxyDeployed, setProxyDeployed] = useState(false);

  const proxyAddress = watch.proxyAddress(account?.address);
  const prevProxy = usePrevious(proxyAddress);

  useEffect(() => {
    if (prevProxy === undefined && proxyAddress === null) {
      setStartedWithoutProxy(true);
    }
  }, [proxyAddress, prevProxy]);

  const [setupProxy, proxyLoading, , proxyErrors] = useActionState(async () => {
    log('proxy setup is running');
    if (!account) return null;
    if (proxyAddress) return proxyAddress;

    const txPromise = taker.service('proxy').ensureProxy();

    const txMgr = taker.service('transactionManager');
    txMgr.listen(txPromise, {
      mined: tx => {
        setStartingBlockHeight(tx._blockNumberWhenMined);
      },
      confirmed: () => {
        setProxyDeployed(true);
      },
      error: () => {
        setStartingBlockHeight(0);
      }
    });

    await txMgr.confirm(txPromise, 10);
  });

  return {
    proxyAddress,
    startedWithoutProxy,
    setupProxy,
    proxyLoading,
    initialProxyCheck: proxyAddress === undefined,
    proxyErrors,
    startingBlockHeight,
    proxyDeployed,
    hasProxy: startedWithoutProxy ? proxyDeployed : !!proxyAddress
  };
}
