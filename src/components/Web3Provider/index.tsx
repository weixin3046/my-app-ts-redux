import {
  useWeb3React,
  Web3ReactHooks,
  Web3ReactProvider,
} from "@web3-react/core";
import { MetaMask } from "@web3-react/metamask";

import { ReactNode } from "react";
import { Network } from "@web3-react/network";
import { hooks as networkHooks, network } from "connection/network";
import { hooks as metaMaskHooks, metaMask } from "connection/metaMask";
import { Connector } from "@web3-react/types";

const connectors: [MetaMask | Network, Web3ReactHooks][] = [
  [metaMask, metaMaskHooks],
  [network, networkHooks],
];

function getName(connector: Connector) {
  if (connector instanceof Network) return "Network";
  return "Unknown";
}

function Child() {
  const { connector, chainId } = useWeb3React();
  console.log(`Priority Connector is 看这里啊: ${chainId}`);
  return null;
}

export default function Web3Provider({ children }: { children: ReactNode }) {
  return (
    <Web3ReactProvider connectors={connectors}>
      <Child />
      {children}
    </Web3ReactProvider>
  );
}
