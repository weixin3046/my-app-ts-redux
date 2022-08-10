import { JsonRpcProvider } from "@ethersproject/providers";

import { SupportedChainId } from "./chains";

/**
 * These are the network URLs used by the interface when there is not another available source of chain data
 */
export const RPC_URLS: { [key in SupportedChainId]: string } = {
  [SupportedChainId.FINDORA]: `https://evm.findorascan.io`,
  [SupportedChainId.FINDORA_TESTNET]: `https://testnet-anvil.evm.findorascan.io`,
};
