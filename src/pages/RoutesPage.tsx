import React from "react";
import { Route, Routes } from "react-router-dom";
import HomaPage from "./Home";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Header from "components/Header";
// const { Header, Footer, Sider, Content } = Layout;

const client = new ApolloClient({
  uri: "https://graph.fairyswap.finance/subgraphs/name/findora/nft",
  cache: new InMemoryCache(),
});

export default function RoutesPage() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Routes>
          <Route path="/" element={<HomaPage />} />
        </Routes>
      </ApolloProvider>
    </div>
  );
}
