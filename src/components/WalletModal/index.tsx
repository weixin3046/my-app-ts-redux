import { useWeb3React } from "@web3-react/core";
import { Connector } from "@web3-react/types";
import {
  getConnection,
  getIsCoinbaseWallet,
  getIsInjected,
  getIsMetaMask,
} from "connection/utils";
import { useState, useCallback, useEffect } from "react";
import { useModalIsOpen, useToggleWalletModal } from "state/application/hooks";
import { ApplicationModal } from "state/application/reducer";
import { updateConnectionError } from "state/connection/reducer";
import { useAppDispatch, useAppSelector } from "state/hooks";
import { updateSelectedWallet } from "state/user/reducer";
import { ArrowLeft, XCircle } from "react-feather";
import { Button } from "antd";
import styled from "styled-components";
import { isMobile } from "utils/userAgent";

const CloseIcon = styled.div`
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

const WALLET_VIEWS = {
  OPTIONS: "options",
  ACCOUNT: "account",
  PENDING: "pending",
};

export default function WalletModal({
  pendingTransactions,
  confirmedTransactions,
  ENSName,
}: {
  pendingTransactions: string[]; // hashes of pending
  confirmedTransactions: string[]; // hashes of confirmed
  ENSName?: string;
}) {
  const dispatch = useAppDispatch();
  const { account } = useWeb3React();
  const [walletView, setWalletView] = useState(WALLET_VIEWS.ACCOUNT);
  const [pendingConnector, setPendingConnector] = useState<
    Connector | undefined
  >();
  const pendingError = useAppSelector((state) =>
    pendingConnector
      ? state.connection.errorByConnectionType[
          getConnection(pendingConnector).type
        ]
      : undefined
  );
  const walletModalOpen = useModalIsOpen(ApplicationModal.WALLET);
  const toggleWalletModal = useToggleWalletModal();
  // const [tokenBalances, tokenBalancesIsLoading] = useAllTokenBalances()
  // const native = useNativeCurrency();
  // const balances = useCurrencyBalances(account, sortedTokensWithETH)
  const openOptions = useCallback(() => {
    setWalletView(WALLET_VIEWS.OPTIONS);
  }, [setWalletView]);

  useEffect(() => {
    if (walletModalOpen) {
      setWalletView(account ? WALLET_VIEWS.ACCOUNT : WALLET_VIEWS.OPTIONS);
    }
  }, [walletModalOpen, setWalletView, account]);

  useEffect(() => {
    if (pendingConnector && walletView !== WALLET_VIEWS.PENDING) {
      updateConnectionError({
        connectionType: getConnection(pendingConnector).type,
        error: undefined,
      });
      setPendingConnector(undefined);
    }
  }, [pendingConnector, walletView]);

  const tryActivation = useCallback(
    async (connector: Connector) => {
      const connectionType = getConnection(connector).type;

      try {
        // Fortmatic opens it's own modal on activation to log in. This modal has a tabIndex
        // collision into the WalletModal, so we special case by closing the modal.
        // if (connectionType === ConnectionType.FORTMATIC) {
        //   toggleWalletModal();
        // }

        setPendingConnector(connector);
        setWalletView(WALLET_VIEWS.PENDING);
        dispatch(updateConnectionError({ connectionType, error: undefined }));

        await connector.activate();

        dispatch(updateSelectedWallet({ wallet: connectionType }));
      } catch (error: any) {
        console.debug(`web3-react connection error: ${error}`);
        dispatch(
          updateConnectionError({ connectionType, error: error.message })
        );
      }
    },
    [dispatch, toggleWalletModal]
  );

  function getOptions() {
    const isInjected = getIsInjected();
    const isMetaMask = getIsMetaMask();
    const isCoinbaseWallet = getIsCoinbaseWallet();

    const isCoinbaseWalletBrowser = isMobile && isCoinbaseWallet;
    const isMetaMaskBrowser = isMobile && isMetaMask;
    const isInjectedMobileBrowser =
      isCoinbaseWalletBrowser || isMetaMaskBrowser;

    let injectedOption;
    if (!isInjected) {
      if (!isMobile) {
        injectedOption = <div>InstallMetaMaskOption</div>;
      }
    } else if (!isCoinbaseWallet) {
      if (isMetaMask) {
        injectedOption = <div>MetaMaskOption</div>;
      } else {
        injectedOption = <div>InjectedOption</div>;
      }
    }

    let coinbaseWalletOption;
    if (isMobile && !isInjectedMobileBrowser) {
      coinbaseWalletOption = <div>OpenCoinbaseWalletOption</div>;
    } else if (!isMobile || isCoinbaseWalletBrowser) {
      coinbaseWalletOption = <div>CoinbaseWalletOption</div>;
    }
    const walletConnectionOption =
      (!isInjectedMobileBrowser && <div>WalletConnectOption</div>) ?? null;

    const fortmaticOption =
      (!isInjectedMobileBrowser && <div>FortmaticOption</div>) ?? null;
    return (
      <>
        {injectedOption}
        {coinbaseWalletOption}
        {walletConnectionOption}
        {fortmaticOption}
      </>
    );
  }
  function getModalContent() {
    if (walletView === WALLET_VIEWS.ACCOUNT) {
      return <div>{account}</div>;
    }

    let headerRow;
    if (walletView === WALLET_VIEWS.PENDING) {
      headerRow = null;
    } else if (walletView === WALLET_VIEWS.ACCOUNT || !!account) {
      <Button
        onClick={() =>
          setWalletView(account ? WALLET_VIEWS.ACCOUNT : WALLET_VIEWS.OPTIONS)
        }
      >
        <ArrowLeft />
      </Button>;
    } else {
      <div>Connect a walle</div>;
    }
    return (
      <div>
        <div>
          {headerRow}
          <CloseIcon onClick={toggleWalletModal}>
            <XCircle />
          </CloseIcon>
        </div>
        <div>
          {walletView === WALLET_VIEWS.PENDING &&
            pendingConnector &&
            "PendingView"}
          {walletView !== WALLET_VIEWS.PENDING && <div>{getOptions()}</div>}

          {!pendingError && <div>底部信息</div>}
        </div>
      </div>
    );
  }
  return <></>;
}
