import { useWeb3React } from "@web3-react/core";
import { Avatar, Button, Drawer, Image, Menu, Space, MenuProps } from "antd";
import { useState, useCallback } from "react";
import { CloseCircleOutlined } from "@ant-design/icons";
import { shortenAddress } from "utils";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { useAppDispatch } from "state/hooks";
import { updateSelectedWallet } from "state/user/reducer";
import { getConnection } from "connection/utils";
import { Connector } from "@web3-react/types";
import { updateConnectionError } from "state/connection/reducer";
import { injectedConnection } from "connection";

type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  disabled?: boolean,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    disabled,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const WALLET_VIEWS = {
  OPTIONS: "options",
  ACCOUNT: "account",
  PENDING: "pending",
};

export default function UserPage() {
  const dispatch = useAppDispatch();
  const { isActive, account, chainId } = useWeb3React();
  const [error, setError] = useState(undefined);
  const [visible, setVisible] = useState(false);
  const [pendingConnector, setPendingConnector] = useState<
    Connector | undefined
  >();
  const [walletView, setWalletView] = useState(WALLET_VIEWS.ACCOUNT);
  const navigate = useNavigate();
  const handleOnCLickConnectWallet = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const items = [
    getItem("My Items", "items"),
    getItem("Favorites", "favorites"),
    getItem("My collections", "collections"),
    // getItem('Settings', 'settings'),
    // getItem(
    //   <RowBetween>
    //     <ButtonLink to="./" type="link">
    //       Night Mode
    //     </ButtonLink>
    //     <Switch checked={!!mode} onChange={handleModeChange} />
    //   </RowBetween>,
    //   'switch',
    // ),
  ];
  const onSwitchNav: MenuProps["onClick"] = (e) => {
    if (e.key === "switch") return;
    if (e.key === "account") return;
    setVisible(false);
    navigate(`/user/${e.key}`);
  };

  const tryActivation = useCallback(
    async (connector: Connector) => {
      const connectionType = getConnection(connector)!.type;
      try {
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
    [dispatch]
  );
  if (!chainId) {
    return null;
  } else if (error) {
    return <div>error</div>;
  } else if (account) {
    return (
      <Avatar
        onClick={handleOnCLickConnectWallet}
        src={<Image src="" style={{ width: 36 }} />}
        size={36}
        style={{
          background: "linear-gradient(90deg, #00E087 0.18%, #00AAFF 100.18%)",
          verticalAlign: "middle",
        }}
      >
        U
      </Avatar>
    );
  } else {
    return (
      <Button
        type="text"
        onClick={() => tryActivation(injectedConnection.connector)}
      >
        {" "}
        Connect Wallet
      </Button>
    );
  }
}
