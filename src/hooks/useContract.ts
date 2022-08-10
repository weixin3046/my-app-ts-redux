import { Contract } from "@ethersproject/contracts";
import { useWeb3React } from "@web3-react/core";
import { useMemo } from "react";
import { getContract } from "utils";
import CONFIG_ABI from "abis/ExchangeNFTConfig.json";
import EXCHANGE_ABI from "abis/ExchangeNft721s.json";
import ROYALTIES_ABI from "abis/RoyaltiesProvider.json";
import ERC20_ABI from "abis/erc20.json";
import ERC721_ABI from "abis/erc721.json";
import ERC1155_ABI from "abis/erc1155.json";
import { Erc20, Erc721, Erc1155 } from "abis/types";

import {
  CONFIG_ADDRESSES,
  EXCHANGE_ADDRESSES,
  ROYALTIES_ADDRESSES,
} from "constants/addresses";
// returns null on errors
export function useContract<T extends Contract = Contract>(
  addressOrAddressMap: string | { [chainId: number]: string } | undefined,
  ABI: any,
  withSignerIfPossible = true
): T | null {
  const { provider, account, chainId } = useWeb3React();
  return useMemo(() => {
    if (!addressOrAddressMap || !ABI || !provider || !chainId) return null;
    let address: string | undefined;
    if (typeof addressOrAddressMap === "string") address = addressOrAddressMap;
    else address = addressOrAddressMap[chainId];
    if (!address) return null;
    try {
      return getContract(
        address,
        ABI,
        provider,
        withSignerIfPossible && account ? account : undefined
      );
    } catch (error) {
      console.error("Failed to get contract", error);
      return null;
    }
  }, [
    addressOrAddressMap,
    ABI,
    provider,
    chainId,
    withSignerIfPossible,
    account,
  ]) as T;
}
export function useTokenContract(
  tokenAddress?: string,
  withSignerIfPossible?: boolean
) {
  return useContract<Erc20>(tokenAddress, ERC20_ABI, withSignerIfPossible);
}
export function useERC721Contract(nftAddress?: string) {
  return useContract<Erc721>(nftAddress, ERC721_ABI, false);
}
export function useERC1155Contract(nftAddress?: string) {
  return useContract<Erc1155>(nftAddress, ERC1155_ABI, false);
}
export function useConfigContract() {
  return useContract(CONFIG_ADDRESSES, CONFIG_ABI, false);
}
export function useExchangeContract() {
  return useContract(EXCHANGE_ADDRESSES, EXCHANGE_ABI, false);
}
export function useRoyaltiesContract() {
  return useContract(ROYALTIES_ADDRESSES, ROYALTIES_ABI, false);
}
