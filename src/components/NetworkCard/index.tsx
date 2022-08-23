import { useEffect, useState } from "react";
import { hooks, network } from "connection/network";
import { Button, Card } from "antd";

const {
  useChainId,
  useAccounts,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks;

export default function NetworkCard() {
  const chainId = useChainId();

  const accounts = useAccounts();
  const isActivating = useIsActivating();

  const isActive = useIsActive();

  const provider = useProvider();
  const ENSNames = useENSNames(provider);

  const [error, setError] = useState(undefined);
  console.log(chainId, accounts);
  // attempt to connect eagerly on mount
  useEffect(() => {
    void network.activate().catch(() => {
      console.debug("Failed to connect to network");
    });
  }, []);

  return (
    <>
      <Button
        onClick={() => {
          void network
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
