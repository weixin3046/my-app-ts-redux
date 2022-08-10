import { useWeb3React } from "@web3-react/core";
import { getConnection } from "connection/utils";
import { useMemo } from "react";
import { useAppSelector } from "state/hooks";
import { TransactionDetails } from "state/transactions/types";
import {
  isTransactionRecent,
  useAllTransactions,
} from "../../state/transactions/hooks";
import { Activity } from "react-feather";
import { isChainAllowed } from "utils/switchChain";
import { useHasSocks } from "hooks/useSocksBalance";
import { useToggleWalletModal } from "state/application/hooks";
import styled, { css } from "styled-components/macro";
import { shortenAddress } from "../../utils";
import Loader from "../Loader";
import { RowBetween } from "components/Row";
import WalletModal from "../WalletModal";

const NetworkIcon = styled(Activity)`
  margin-left: 0.25rem;
  margin-right: 0.5rem;
  width: 16px;
  height: 16px;
`;

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
  const connectionType = getConnection(connector).type;

  const error = useAppSelector(
    (state) =>
      state.connection.errorByConnectionType[getConnection(connector).type]
  );
  const chainAllowed = chainId && isChainAllowed(connector, chainId);

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
  console.log(!chainId, chainId, account);
  if (!chainId) {
    return null;
  } else if (!chainAllowed) {
    return (
      <button onClick={toggleWalletModal}>
        <NetworkIcon />
        <div>Wrong Network</div>
      </button>
    );
  } else if (error) {
    return (
      <button onClick={toggleWalletModal}>
        <NetworkIcon />
        <div>Error</div>
      </button>
    );
  } else if (account) {
    return (
      <div
        data-testid="web3-status-connected"
        onClick={toggleWalletModal}
        // pending={hasPendingTransactions}
      >
        {hasPendingTransactions ? (
          <RowBetween>
            <div>
              <div>{pending?.length} Pending</div>
            </div>{" "}
            <Loader stroke="white" />
          </RowBetween>
        ) : (
          <>
            {/* {hasSocks ? <Sock /> : null} */}
            <div>{ENSName || shortenAddress(account)}</div>
          </>
        )}
        {/* {!hasPendingTransactions && (
          <StatusIcon connectionType={connectionType} />
        )} */}
      </div>
    );
  } else {
    return (
      <div
        onClick={toggleWalletModal}
        // faded={!account}
      >
        <Text>
          <span>Connect Wallet</span>
        </Text>
      </div>
    );
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
