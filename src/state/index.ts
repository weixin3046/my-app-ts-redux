import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { updateVersion } from "../global/actions";
import user from "./user/reducer";
import transactions from "./transactions/reducer";
import connection from "./connection/reducer";
import application from "./application/reducer";

const store = configureStore({
  reducer: {
    user,
    transactions,
    connection,
    application,
  },
});
store.dispatch(updateVersion());

setupListeners(store.dispatch);

export default store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
