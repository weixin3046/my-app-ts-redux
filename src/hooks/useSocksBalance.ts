// import { Token } from "@uniswap/sdk-core";
import { useWeb3React } from "@web3-react/core";
import { SupportedChainId } from "constants/chains";
import { useMemo } from "react";
// import { useTokenBalance } from "state/connection/hooks";

//TODO 后期要更换成Findora 的sdk 来获取balance
// technically a 721, not an ERC20, but suffices for our purposes
// const SOCKS = new Token(
//   SupportedChainId.MAINNET,
//   SOCKS_CONTROLLER_ADDRESSES[SupportedChainId.MAINNET],
//   0
// );

export function useHasSocks(): boolean | undefined {
  const { account, chainId } = useWeb3React();

  // const balance = useTokenBalance(
  //   account ?? undefined,
  //   chainId === SupportedChainId.MAINNET ? SOCKS : undefined
  // );

  // return useMemo(() => Boolean(balance?.greaterThan(0)), [balance]);
  return false;
}
