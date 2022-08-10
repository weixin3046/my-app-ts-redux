import { Connector } from "@web3-react/types";
import {
  coinbaseWalletConnection,
  fortmaticConnection,
  gnosisSafeConnection,
  injectedConnection,
  networkConnection,
  walletConnectConnection,
} from "connection";
import { ALL_SUPPORTED_CHAIN_IDS, SupportedChainId } from "constants/chains";
import { getChainInfo } from "constants/chainInfo";
import { RPC_URLS } from "constants/networks";

function getRpcUrls(chainId: SupportedChainId): [string] {
  switch (chainId) {
    case SupportedChainId.FINDORA:
    case SupportedChainId.FINDORA_TESTNET:
      return [RPC_URLS[chainId]];
    default:
  }
  // Our API-keyed URLs will fail security checks when used with external wallets.
  throw new Error("RPC URLs must use public endpoints");
}

export function isChainAllowed(connector: Connector, chainId: number) {
  switch (connector) {
    case fortmaticConnection.connector:
    case injectedConnection.connector:
    case coinbaseWalletConnection.connector:
    case walletConnectConnection.connector:
    case networkConnection.connector:
    case gnosisSafeConnection.connector:
      return ALL_SUPPORTED_CHAIN_IDS.includes(chainId);
    default:
      return false;
  }
}

export const switchChain = async (
  connector: Connector,
  chainId: SupportedChainId
) => {
  if (!isChainAllowed(connector, chainId)) {
    throw new Error(
      `Chain ${chainId} not supported for connector (${typeof connector})`
    );
  } else if (
    connector === walletConnectConnection.connector ||
    connector === networkConnection.connector
  ) {
    await connector.activate(chainId);
  } else {
    const info = getChainInfo(chainId);
    const addChainParameter = {
      chainId,
      chainName: info.label,
      rpcUrls: getRpcUrls(chainId),
      nativeCurrency: info.nativeCurrency,
      blockExplorerUrls: [info.explorer],
    };
    await connector.activate(addChainParameter);
  }
};
