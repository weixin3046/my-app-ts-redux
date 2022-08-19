import { AppState } from "state";
import { useAppDispatch, useAppSelector } from "state/hooks";
import { useCallback } from "react";
import { ApplicationModal, setOpenModal } from "./reducer";

export function useModalIsOpen(modal: ApplicationModal): boolean {
  const openModal = useAppSelector(
    (state: AppState) => state.application.openModal
  );
  return openModal === modal;
}

export function useToggleModal(modal: ApplicationModal): () => void {
  const isOpen = useModalIsOpen(modal);
  const dispatch = useAppDispatch();
  return useCallback(
    () => dispatch(setOpenModal(isOpen ? null : modal)),
    [dispatch, modal, isOpen]
  );
}

export function useToggleWalletModal(): () => void {
  return useToggleModal(ApplicationModal.WALLET);
}
