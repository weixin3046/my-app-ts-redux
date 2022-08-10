export enum SupportedChainId {
  FINDORA = 2152,
  FINDORA_TESTNET = 2153,
}

export const CHAIN_IDS_TO_NAMES = {
  [SupportedChainId.FINDORA]: "findora",
  [SupportedChainId.FINDORA_TESTNET]: "findora_testnet",
};
/**
 * Array of all the supported chain IDs
 */
export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = Object.values(
  SupportedChainId
).filter((id) => typeof id === "number") as SupportedChainId[];

export const All_FINDORA_CHAIN_IDS = [
  SupportedChainId.FINDORA,
  SupportedChainId.FINDORA_TESTNET,
];

export type SupporteDevChainId = typeof All_FINDORA_CHAIN_IDS[number];
