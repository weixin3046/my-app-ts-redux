import { SupportedChainId, SupporteDevChainId } from "./chains";
import ethereumLogoUrl from "assets/images/ethereum-logo.png";

export enum NetworkType {
  L1,
  L2,
}

interface BaseChainInfo {
  readonly networkType: NetworkType;
  readonly blockWaitMsBeforeWarning?: number; //块等待预警告
  readonly docs: string;
  readonly explorer: string;
  readonly infoLink?: string;
  readonly logoUrl: string;
  readonly label: string;
  readonly helpCenterUrl?: string;
  readonly nativeCurrency: {
    name: string; // e.g. 'Goerli ETH',
    symbol: string; // e.g. 'gorETH',
    decimals: number; // e.g. 18,
  };
}

export type ChainInfoMap = { readonly [chainId: number]: BaseChainInfo };

const CHAIN_INFO: ChainInfoMap = {
  [SupportedChainId.FINDORA]: {
    networkType: NetworkType.L1,
    docs: "https://wiki.findora.org/",
    explorer: "https://evm.findorascan.io",
    // infoLink: "https://info.uniswap.org/#/",
    label: "Findora",
    logoUrl: ethereumLogoUrl,
    nativeCurrency: { name: "Ether", symbol: "FRA", decimals: 18 },
  },
  [SupportedChainId.FINDORA_TESTNET]: {
    networkType: NetworkType.L1,
    docs: "https://wiki.findora.org/",
    explorer: "https://testnet-anvil.evm.findorascan.io",
    // infoLink: "https://info.uniswap.org/#/",
    label: "Findora-testnet",
    logoUrl: ethereumLogoUrl,
    nativeCurrency: { name: "Ether", symbol: "BEAR", decimals: 18 },
  },
};

export function getChainInfo(chainId: any): any {
  if (chainId) {
    return CHAIN_INFO[chainId] ?? undefined;
  }
  return undefined;
}

export const FINDORA_INFO = CHAIN_INFO[SupportedChainId.FINDORA];
export function getChainInfoOrDefault(chainId: number | undefined) {
  return getChainInfo(chainId) ?? FINDORA_INFO;
}
