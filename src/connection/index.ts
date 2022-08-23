import { Connector } from "@web3-react/types";
import { initializeConnector, Web3ReactHooks } from "@web3-react/core";
import { Network } from "@web3-react/network";
import { RPC_URLS } from "constants/networks";
import { MetaMask } from "@web3-react/metamask";

export enum ConnectionType {
  INJECTED = "INJECTED",
  NETWORK = "NETWORK",
}

export interface Connection {
  connector: Connector;
  hooks: Web3ReactHooks;
  type: ConnectionType;
}

function onError(error: Error) {
  console.debug(`web3-react error: ${error}`);
}

const [web3Network, web3NetworkHooks] = initializeConnector<Network>(
  (actions) => new Network({ actions, urlMap: RPC_URLS, defaultChainId: 2152 })
);
export const networkConnection: Connection = {
  connector: web3Network,
  hooks: web3NetworkHooks,
  type: ConnectionType.NETWORK,
};

const [web3Injected, web3InjectedHooks] = initializeConnector<MetaMask>(
  (actions) => new MetaMask({ actions, onError })
);
export const injectedConnection: Connection = {
  connector: web3Injected,
  hooks: web3InjectedHooks,
  type: ConnectionType.INJECTED,
};

// const [web3GnosisSafe, web3GnosisSafeHooks] = initializeConnector<GnosisSafe>(
//   (actions) => new GnosisSafe({ actions })
// );

// export const gnosisSafeConnection: Connection = {
//   connector: web3GnosisSafe,
//   hooks: web3GnosisSafeHooks,
//   type: ConnectionType.GNOSIS_SAFE,
// };
// TODO:新版钱包
// export const [web3Injected, web3InjectedHooks] = initializeConnector<MetaMask>(
//   (actions) => new MetaMask({ actions, onError })
// );
// export const injectedConnection: Connection = {
//   connector: web3Injected,
//   hooks: web3InjectedHooks,
//   type: ConnectionType.INJECTED,
// };

// export const [web3WalletConnect, web3WalletConnectHooks] =
//   initializeConnector<WalletConnect>(
//     (actions) =>
//       new WalletConnect({
//         actions,
//         options: {
//           rpc: RPC_URLS,
//           qrcode: true,
//         },
//         onError,
//       })
//   );
// export const walletConnectConnection: Connection = {
//   connector: web3WalletConnect,
//   hooks: web3WalletConnectHooks,
//   type: ConnectionType.WALLET_CONNECT,
// };

// export const [web3CoinbaseWallet, web3CoinbaseWalletHooks] =
//   initializeConnector<CoinbaseWallet>(
//     (actions) =>
//       new CoinbaseWallet({
//         actions,
//         options: {
//           url: RPC_URLS[SupportedChainId.FINDORA],
//           appName: "Hitall",
//         },
//         onError,
//       })
//   );
// export const coinbaseWalletConnection: Connection = {
//   connector: web3CoinbaseWallet,
//   hooks: web3CoinbaseWalletHooks,
//   type: ConnectionType.COINBASE_WALLET,
// };

// export const [web3Network, web3NetworkHooks] = initializeConnector<Network>(
//   (actions) => new Network({ actions, urlMap: RPC_URLS, defaultChainId: 1 })
// );
// export const networkConnection: Connection = {
//   connector: web3Network,
//   hooks: web3NetworkHooks,
//   type: ConnectionType.NETWORK,
// };
