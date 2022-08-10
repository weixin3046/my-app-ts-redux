import { TransactionResponse } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { Token } from "@uniswap/sdk-core";
import { TransactionDetails, TransactionType, TransactionInfo } from "./types";
import { useAppDispatch, useAppSelector } from "state/hooks";
import { useMemo, useCallback } from "react";
import { addTransaction } from "./reducer";

// helper that can take a ethers library transaction response and add it to the list of transactions
export function useTransactionAdder(): (
  response: TransactionResponse,
  info: TransactionInfo
) => void {
  const { chainId, account } = useWeb3React();
  const dispatch = useAppDispatch();

  return useCallback(
    (response: TransactionResponse, info: TransactionInfo) => {
      if (!account) return;
      if (!chainId) return;

      const { hash } = response;
      if (!hash) {
        throw Error("No transaction hash found.");
      }
      dispatch(addTransaction({ hash, from: account, info, chainId }));
    },
    [account, chainId, dispatch]
  );
}

// returns all the transactions for the current chain
export function useAllTransactions(): { [txHash: string]: TransactionDetails } {
  const { chainId } = useWeb3React();

  const state = useAppSelector((state) => state.transactions);

  return chainId ? state[chainId] ?? {} : {};
}

/**
 * Returns whether a transaction happened in the last day (86400 seconds * 1000 milliseconds / second)
 * @param tx to check for recency
 */
export function isTransactionRecent(tx: TransactionDetails): boolean {
  return new Date().getTime() - tx.addedTime < 86_400_000;
}

// returns whether a token has a pending approval transaction
export function useHasPendingApproval(
  token?: Token,
  spender?: string
): boolean {
  const allTransactions = useAllTransactions();
  return useMemo(
    () =>
      typeof token?.address === "string" &&
      typeof spender === "string" &&
      Object.keys(allTransactions).some((hash) => {
        const tx = allTransactions[hash];
        if (!tx) return false;
        if (tx.receipt) {
          return false;
        } else {
          if (tx.info.type !== TransactionType.APPROVAL) return false;
          return (
            tx.info.spender === spender &&
            tx.info.tokenAddress === token.address &&
            isTransactionRecent(tx)
          );
        }
      }),
    [allTransactions, spender, token?.address]
  );
}
