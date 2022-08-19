import { useWeb3React } from "@web3-react/core";
import { getConnection } from "connection/utils";
import { useMemo } from "react";
import { useAppSelector } from "state/hooks";
import { TransactionDetails } from "state/transactions/types";
import {
  isTransactionRecent,
  useAllTransactions,
} from "../../state/transactions/hooks";
import { useToggleWalletModal } from "state/application/hooks";
import styled from "styled-components/macro";
import { shortenAddress } from "../../utils";
import Loader from "../Loader";
import { Button } from "antd";
import WalletModal from "../WalletModal";

const Text = styled.p`
  flex: 1 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 0.5rem 0 0.25rem;
  font-size: 1rem;
  width: fit-content;
  font-weight: 500;
`;
// const Web3StatusConnected = styled(Web3StatusGeneric)<{ pending?: boolean }>`
//   background-color: ${({ pending, theme }) =>
//     pending ? theme.primary1 : theme.bg1};
//   border: 1px solid
//     ${({ pending, theme }) => (pending ? theme.primary1 : theme.bg1)};
//   color: ${({ pending, theme }) => (pending ? theme.white : theme.text1)};
//   font-weight: 500;
//   :hover,
//   :focus {
//     border: 1px solid ${({ theme }) => darken(0.05, theme.bg3)};

//     :focus {
//       border: 1px solid
//         ${({ pending, theme }) =>
//           pending ? darken(0.1, theme.primary1) : darken(0.1, theme.bg2)};
//     }
//   }
// `;

// we want the latest one to come first, so return negative if a is after b
function newTransactionsFirst(a: TransactionDetails, b: TransactionDetails) {
  return b.addedTime - a.addedTime;
}

function Web3StatusInner() {
  const { account, connector, chainId, ENSName } = useWeb3React();
  console.log(account);
  const connectionType = getConnection(connector).type;
  const error = useAppSelector(
    (state) =>
      state.connection.errorByConnectionType[getConnection(connector).type]
  );
  const allTransactions = useAllTransactions();
  const sortedRecentTransactions = useMemo(() => {
    const txs = Object.values(allTransactions);
    return txs.filter(isTransactionRecent).sort(newTransactionsFirst);
  }, [allTransactions]);

  const pending = sortedRecentTransactions
    .filter((tx) => !tx.receipt)
    .map((tx) => tx.hash);
  const hasPendingTransactions = !!pending.length;
  const toggleWalletModal = useToggleWalletModal();
  if (!chainId) {
    // 没有能连接的网络
    return <>null</>;
  } else if (error) {
    return <Button onClick={toggleWalletModal}>error</Button>;
  } else if (account) {
    return (
      <Button onClick={toggleWalletModal}>
        {hasPendingTransactions ? (
          <div>
            Pending <Loader stroke="red" />
          </div>
        ) : (
          <Text>{ENSName || shortenAddress(account)}</Text>
        )}
        {!hasPendingTransactions && connectionType}
      </Button>
    );
  } else {
    return <Button onClick={toggleWalletModal}>Connect Wallet</Button>;
  }
}

export default function Web3Status() {
  const { ENSName } = useWeb3React();

  const allTransactions = useAllTransactions();

  const sortedRecentTransactions = useMemo(() => {
    const txs = Object.values(allTransactions);
    return txs.filter(isTransactionRecent).sort(newTransactionsFirst);
  }, [allTransactions]);

  const pending = sortedRecentTransactions
    .filter((tx) => !tx.receipt)
    .map((tx) => tx.hash);
  const confirmed = sortedRecentTransactions
    .filter((tx) => tx.receipt)
    .map((tx) => tx.hash);
  return (
    <>
      <Web3StatusInner />
      <WalletModal
        ENSName={ENSName ?? undefined}
        pendingTransactions={pending}
        confirmedTransactions={confirmed}
      />
    </>
  );
}
