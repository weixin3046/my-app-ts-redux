import React from "react";
import { Route, Routes } from "react-router-dom";
import HomaPage from "./Home";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
// const { Header, Footer, Sider, Content } = Layout;

const client = new ApolloClient({
  uri: "https://graph.fairyswap.finance/subgraphs/name/findora/nft",
  cache: new InMemoryCache(),
});
function App() {
  return (
    <div className="App">
      <div>
        <ApolloProvider client={client}>
          <Routes>
            <Route path="/" element={<HomaPage />} />
          </Routes>
        </ApolloProvider>
      </div>
    </div>
  );
}

export default App;
