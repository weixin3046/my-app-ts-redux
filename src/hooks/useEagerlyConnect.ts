import { Connector } from "@web3-react/types";
import { Connection, networkConnection } from "connection";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "state/hooks";
import { getConnection } from "connection/utils";
import { updateSelectedWallet } from "state/user/reducer";
import { useWeb3React } from "@web3-react/core";

async function connect(connector: Connector) {
  try {
    if (connector.connectEagerly) {
      await connector.connectEagerly();
    } else {
      await connector.activate();
    }
  } catch (error) {
    console.debug(`web3-react eager connection error: ${error}`);
  }
}

export default function useEagerlyConnect() {
  const dispatch = useAppDispatch();

  const selectedWallet = useAppSelector((state) => state.user.selectedWallet);

  let selectedConnection: Connection | undefined;
  if (selectedWallet) {
    try {
      selectedConnection = getConnection(selectedWallet);
    } catch {
      dispatch(updateSelectedWallet({ wallet: undefined }));
    }
  }

  useEffect(() => {
    connect(networkConnection.connector);
    if (selectedConnection) {
      connect(selectedConnection.connector);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
}
