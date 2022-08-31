import "./index.css";

import WebLayout from "components/Layout";
import Web3Provider from "components/Web3Provider";
import WebConfigProvider from "components/WebConfigProvider";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import RoutesPage from "./pages/RoutesPage";
import reportWebVitals from "./reportWebVitals";
import store from "./state";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Web3Provider>
        <WebConfigProvider>
          <HashRouter>
            <WebLayout>
              <RoutesPage />
            </WebLayout>
          </HashRouter>
        </WebConfigProvider>
      </Web3Provider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
