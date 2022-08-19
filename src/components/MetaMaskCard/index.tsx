import { useEffect, useState } from "react";
import { hooks, metaMask } from "connection/metaMask";
import { Button } from "antd";

const {
  useChainId,
  useAccounts,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks;

export default function MetaMaskCard() {
  const chainId = useChainId();
  const accounts = useAccounts();
  const isActivating = useIsActivating();

  const isActive = useIsActive();

  const provider = useProvider();
  const ENSNames = useENSNames(provider);

  const [error, setError] = useState(undefined);

  // attempt to connect eagerly on mount
  useEffect(() => {
    void metaMask.connectEagerly().catch(() => {
      console.debug("Failed to connect eagerly to metamask");
    });
  }, []);

  return (
    <>
      <Button>chainId: {chainId}</Button>
      <Button>accounts: {accounts}</Button>
      <Button>isActive: {isActive}</Button>
      <Button>isActivating: {isActivating}</Button>
      <Button
        onClick={() => {
          void metaMask
            .activate()
            .then(() => setError(undefined))
            .catch(setError);
        }}
      >
        network
      </Button>
    </>
  );
}
