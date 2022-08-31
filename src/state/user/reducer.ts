import { createSlice } from "@reduxjs/toolkit";
import { ConnectionType } from "connection";
import { SupportedLocale } from "constants/locales";
const currentTimestamp = () => new Date().getTime();

export interface UserState {
  // We want the user to be able to define which wallet they want to use, even if there are multiple connected wallets via web3-react.
  // If a user had previously connected a wallet but didn't have a wallet override set (because they connected prior to this field being added),
  // we want to handle that case by backfilling them manually. Once we backfill, we set the backfilled field to `true`.
  // After some period of time, our active users will have this property set so we can likely remove the backfilling logic.
  selectedWalletBackfilled: boolean;
  selectedWallet?: ConnectionType;
  userDarkMode: boolean | null; // the user's choice for dark mode or light mode
  userLocale: SupportedLocale | null;
  timestamp: number;
  matchesDarkMode: boolean; // whether the dark mode media query matches
}

export const initialState: UserState = {
  matchesDarkMode: false,
  selectedWallet: undefined,
  selectedWalletBackfilled: false,
  userLocale: null,
  userDarkMode: null,
  timestamp: currentTimestamp(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateSelectedWallet(state, { payload: { wallet } }) {
      state.selectedWallet = wallet;
      state.selectedWalletBackfilled = true;
    },
    updateUserLocale(state, action) {
      state.userLocale = action.payload.userLocale;
      state.timestamp = currentTimestamp();
    },
    updateUserDarkMode(state, action) {
      state.userDarkMode = action.payload.userDarkMode;
      state.timestamp = currentTimestamp();
    },
    updateMatchesDarkMode(state, action) {
      state.matchesDarkMode = action.payload.matchesDarkMode;
      state.timestamp = currentTimestamp();
    },
  },
});

export const {
  updateMatchesDarkMode,
  updateSelectedWallet,
  updateUserLocale,
  updateUserDarkMode,
} = userSlice.actions;

export default userSlice.reducer;
