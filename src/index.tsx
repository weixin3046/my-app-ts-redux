import "@reach/dialog/styles.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./state";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { HashRouter } from "react-router-dom";
import Web3Provider from "./components/Web3Provider";
import ThemeProvider, { ThemedGlobalStyle } from "./theme";

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Web3Provider>
          <ThemeProvider>
            <ThemedGlobalStyle />
            <App />
          </ThemeProvider>
        </Web3Provider>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
