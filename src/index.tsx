import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./state";
import RoutesPage from "./pages/RoutesPage";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
// import "./index.less";
import "./index.css";
import Web3Provider from "components/Web3Provider";
import WebLayout from "components/Layout";
import WebConfigProvider from "components/WebConfigProvider";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Web3Provider>
          <WebConfigProvider>
            <WebLayout>
              <RoutesPage />
            </WebLayout>
          </WebConfigProvider>
        </Web3Provider>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
