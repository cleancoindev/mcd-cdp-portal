import Maker, { USD, TAO } from '@takertao/tao';
import McdPlugin, { ETH, BAT, MTAO } from '@makerdao/tao-plugin-mct';
import trezorPlugin from '@makerdao/dai-plugin-trezor-web';
import ledgerPlugin from '@makerdao/dai-plugin-ledger-web';
import walletLinkPlugin from '@makerdao/dai-plugin-walletlink';
import walletConnectPlugin from '@makerdao/dai-plugin-walletconnect';
import configPlugin from '@makerdao/dai-plugin-config';
import networkConfig from './references/config';
import { networkNameToId } from './utils/network';
import { getQueryParamByName } from './utils/dev';

import rinkebyAddresses from './references/contracts/rinkeby';
import goerliAddresses from './references/contracts/goerli';
import ropstenAddresses from './references/contracts/ropsten';

let _taker;

const otherNetworksOverrides = [
  {
    network: 'rinkeby',
    contracts: rinkebyAddresses
  },
  { network: 'goerli', contracts: goerliAddresses },
  { network: 'ropsten', contracts: ropstenAddresses }
].reduce((acc, { network, contracts }) => {
  for (const [contractName, contractAddress] of Object.entries(contracts)) {
    if (!acc[contractName]) acc[contractName] = {};
    acc[contractName][network] = contractAddress;
  }
  return acc;
}, {});

export function getMaker() {
  if (_taker === undefined) throw new Error('Taker has not been instatiated');
  return _taker;
}

const cdpTypes = [
  { currency: ETH, ilk: 'ETH-A' },
  { currency: BAT, ilk: 'BAT-A' }
];

export async function instantiateMaker({
  rpcUrl,
  network,
  testchainId,
  backendEnv
}) {
  const addressOverrides = ['rinkeby', 'ropsten', 'goerli'].some(
    networkName => networkName === network
  )
    ? otherNetworksOverrides
    : {};

  const mcdPluginConfig = {
    cdpTypes,
    prefetch: false,
    addressOverrides
  };
  const walletLinkPluginConfig = {
    rpcUrl: networkConfig.rpcUrls[networkNameToId(network)]
  };

  const config = {
    log: false,
    plugins: [
      trezorPlugin,
      ledgerPlugin,
      [walletLinkPlugin, walletLinkPluginConfig],
      walletConnectPlugin,
      [McdPlugin, mcdPluginConfig]
    ],
    smartContract: {
      addressOverrides
    },
    provider: {
      url: rpcUrl,
      type:
        network === 'testnet'
          ? 'HTTP'
          : getQueryParamByName('ws') === '0'
          ? 'HTTP'
          : 'WEBSOCKET'
    },
    web3: {
      pollingInterval: network === 'testnet' ? 100 : null
    },
    multicall: true
  };

  // Use the config plugin, if we have a testchainConfigId
  if (testchainId) {
    delete config.provider;
    config.plugins.push([configPlugin, { testchainId, backendEnv }]);
  } else if (!rpcUrl) {
    if (config.provider.type === 'HTTP')
      rpcUrl = networkConfig.rpcUrls[networkNameToId(network)];
    else if (config.provider.type === 'WEBSOCKET')
      rpcUrl = networkConfig.wsRpcUrls[networkNameToId(network)];
    else throw new Error(`Unsupported provider type: ${config.provider.type}`);
    if (!rpcUrl) throw new Error(`Unsupported network: ${network}`);
    config.provider.url = rpcUrl;
  }

  const Taker = await Maker.create('http', config);

  // for debugging
  window.taker = taker;

  return taker;
}

export { USD, TAO, ETH, BAT, MTAO };
