import { SupportedChainId } from "./chains";

/**
 * These are the network URLs used by the interface when there is not another available source of chain data
 */
export const RPC_URLS: { [key in SupportedChainId]: string } = {
  [SupportedChainId.FINDORA]: `https://prod-mainnet.prod.findora.org:8545`,
  [SupportedChainId.FINDORA_TESTNET]: `https://prod-testnet.prod.findora.org:8545/`,
};
