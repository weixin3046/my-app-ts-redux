import { initializeConnector, Web3ReactHooks } from "@web3-react/core";
import { Connector } from "@web3-react/types";
import { GnosisSafe } from "@web3-react/gnosis-safe";
import { Network } from "@web3-react/network";
import { EIP1193 } from "@web3-react/eip1193";
import { SupportedChainId } from "constants/chains";
import Fortmatic from "fortmatic"; //fortmatic钱包插件

import { RPC_URLS } from "../constants/networks";
import { CoinbaseWallet } from "@web3-react/coinbase-wallet";
import { WalletConnect } from "@web3-react/walletconnect";
import { MetaMask } from "@web3-react/metamask";

export enum ConnectionType {
  INJECTED = "INJECTED",
  COINBASE_WALLET = "COINBASE_WALLET",
  WALLET_CONNECT = "WALLET_CONNECT",
  FORTMATIC = "FORTMATIC",
  NETWORK = "NETWORK",
  GNOSIS_SAFE = "GNOSIS_SAFE",
}

function onError(error: Error) {
  console.debug(`web3-react error: ${error}`);
}

export interface Connection {
  connector: Connector;
  hooks: Web3ReactHooks;
  type: ConnectionType;
}

const [web3GnosisSafe, web3GnosisSafeHooks] = initializeConnector<GnosisSafe>(
  (actions) => new GnosisSafe({ actions })
);

export const gnosisSafeConnection: Connection = {
  connector: web3GnosisSafe,
  hooks: web3GnosisSafeHooks,
  type: ConnectionType.GNOSIS_SAFE,
};

const [web3Injected, web3InjectedHooks] = initializeConnector<MetaMask>(
  (actions) => new MetaMask({ actions, onError })
);
export const injectedConnection: Connection = {
  connector: web3Injected,
  hooks: web3InjectedHooks,
  type: ConnectionType.INJECTED,
};

const [web3Network, web3NetworkHooks] = initializeConnector<Network>(
  (actions) => new Network({ actions, urlMap: RPC_URLS, defaultChainId: 1 })
);

export const networkConnection: Connection = {
  connector: web3Network,
  hooks: web3NetworkHooks,
  type: ConnectionType.NETWORK,
};

const [web3WalletConnect, web3WalletConnectHooks] =
  initializeConnector<WalletConnect>(
    (actions) =>
      new WalletConnect({
        actions,
        options: {
          rpc: RPC_URLS,
          qrcode: true,
        },
        onError,
      })
  );
export const walletConnectConnection: Connection = {
  connector: web3WalletConnect,
  hooks: web3WalletConnectHooks,
  type: ConnectionType.WALLET_CONNECT,
};

const [web3Fortmatic, web3FortmaticHooks] = initializeConnector<EIP1193>(
  (actions) =>
    new EIP1193({
      actions,
      //@ts-ignore
      provider: new Fortmatic(
        //@ts-ignore
        process.env.REACT_APP_FORTMATIC_KEY
      ).getProvider(),
    })
);
export const fortmaticConnection: Connection = {
  connector: web3Fortmatic,
  hooks: web3FortmaticHooks,
  type: ConnectionType.FORTMATIC,
};

const [web3CoinbaseWallet, web3CoinbaseWalletHooks] =
  initializeConnector<CoinbaseWallet>(
    (actions) =>
      new CoinbaseWallet({
        actions,
        options: {
          url: RPC_URLS[SupportedChainId.FINDORA],
          appName: "Uniswap",
        },
        onError,
      })
  );
export const coinbaseWalletConnection: Connection = {
  connector: web3CoinbaseWallet,
  hooks: web3CoinbaseWalletHooks,
  type: ConnectionType.COINBASE_WALLET,
};
