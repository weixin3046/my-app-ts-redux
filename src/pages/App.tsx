import React from "react";
import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components/macro";
import HomaPage from "./Home";
import Header from "components/Header";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
// const { Header, Footer, Sider, Content } = Layout;

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
`;
const client = new ApolloClient({
  uri: "https://graph.fairyswap.finance/subgraphs/name/findora/nft",
  cache: new InMemoryCache(),
});
function App() {
  return (
    <div className="App">
      <AppWrapper>
        <Header></Header>
        <ApolloProvider client={client}>
          <Routes>
            <Route path="/" element={<HomaPage />} />
          </Routes>
        </ApolloProvider>
      </AppWrapper>
    </div>
  );
}

export default App;
