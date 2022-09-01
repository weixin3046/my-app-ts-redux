import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { useWeb3React } from "@web3-react/core";
import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import ExplorePage from "./Explore";
import HomaPage from "./Home";
// const { Header, Footer, Sider, Content } = Layout;

export default function RoutesPage() {
  const { chainId } = useWeb3React();
  const client = new ApolloClient({
    uri:
      chainId === 2153
        ? "https://testnet-graph.fairyswap.finance/subgraphs/name/findora/nft"
        : "https://graph.fairyswap.finance/subgraphs/name/findora/nft",
    cache: new InMemoryCache(),
  });
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Suspense fallback={<p>loading</p>}>
          <Routes>
            <Route path="/" element={<HomaPage />} />
            <Route path="/Explore" element={<ExplorePage />} />
            <Route path="*" element={<Navigate to="/" />} />
            {/* <Route path="/" element={<HomaPage />} /> */}
            {/* <Route path="/" element={<Explore />} /> */}
          </Routes>
        </Suspense>
      </ApolloProvider>
    </div>
  );
}
