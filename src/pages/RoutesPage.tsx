import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import ExplorePage from "./Explore";
import HomaPage from "./Home";
// const { Header, Footer, Sider, Content } = Layout;

const client = new ApolloClient({
  uri: "https://graph.fairyswap.finance/subgraphs/name/findora/nft",
  cache: new InMemoryCache(),
});

export default function RoutesPage() {
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
