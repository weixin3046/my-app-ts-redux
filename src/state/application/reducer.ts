import { createSlice } from "@reduxjs/toolkit";

import { SupportedChainId } from "../../constants/chains";

export enum ApplicationModal {
  ADDRESS_CLAIM,
  BLOCKED_ACCOUNT,
  DELEGATE,
  CLAIM_POPUP,
  MENU,
  NETWORK_SELECTOR,
  POOL_OVERVIEW_OPTIONS,
  PRIVACY_POLICY,
  SELF_CLAIM,
  SETTINGS,
  WALLET,
  QUEUE,
  EXECUTE,
}
//TODO 看需求在决定要不要
export type PopupContent =
  | {
      txn: {
        hash: string;
      };
    }
  | {
      failedSwitchNetwork: SupportedChainId;
    };

//下拉列表
type PopupList = Array<{
  key: string;
  show: boolean;
  content: PopupContent;
  removeAfterMs: number | null;
}>;

export interface ApplicationState {
  readonly chainId: number | null;
  readonly openModal: ApplicationModal | null;
  readonly popupList: PopupList;
}
const initialState: ApplicationState = {
  chainId: null,
  openModal: null,
  popupList: [],
};

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    updateChainId(state, action) {
      const { chainId } = action.payload;
      state.chainId = chainId;
    },
    setOpenModal(state, action) {
      state.openModal = action.payload;
    },
    // addPopup(
    //   state,
    //   { payload: { content, key, removeAfterMs = DEFAULT_TXN_DISMISS_MS } }
    // ) {
    //   state.popupList = (
    //     key
    //       ? state.popupList.filter((popup) => popup.key !== key)
    //       : state.popupList
    //   ).concat([
    //     {
    //       key: key || nanoid(),
    //       show: true,
    //       content,
    //       removeAfterMs,
    //     },
    //   ]);
    // },
    // removePopup(state, { payload: { key } }) {
    //   state.popupList.forEach((p) => {
    //     if (p.key === key) {
    //       p.show = false;
    //     }
    //   });
    // },
  },
});
export const { updateChainId, setOpenModal } = applicationSlice.actions;

export default applicationSlice.reducer;
