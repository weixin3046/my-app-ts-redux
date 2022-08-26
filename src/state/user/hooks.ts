import { SupportedLocale } from "constants/locales";
import { useAppDispatch, useAppSelector } from "state/hooks";
import { useCallback } from "react";
import { updateUserDarkMode, updateUserLocale } from "./reducer";
import { shallowEqual } from "react-redux";

export function useUserLocale(): SupportedLocale | null {
  return useAppSelector((state) => state.user.userLocale);
}

export function useUserLocaleManager(): [
  SupportedLocale | null,
  (newLocale: SupportedLocale) => void
] {
  const dispatch = useAppDispatch();
  const locale = useUserLocale();

  const setLocale = useCallback(
    (newLocale: SupportedLocale) => {
      dispatch(updateUserLocale({ userLocale: newLocale }));
    },
    [dispatch]
  );

  return [locale, setLocale];
}

export function useIsDarkMode(): boolean {
  const { userDarkMode, matchesDarkMode } = useAppSelector(
    ({ user: { matchesDarkMode, userDarkMode } }) => ({
      userDarkMode,
      matchesDarkMode,
    }),
    shallowEqual
  );
  return userDarkMode === null ? matchesDarkMode : userDarkMode;
}

export function useDarkModeManager(): [boolean, () => void] {
  const dispatch = useAppDispatch();
  const darkMode = useIsDarkMode();

  const toggleSetDarkMode = useCallback(() => {
    dispatch(updateUserDarkMode({ userDarkMode: !darkMode }));
  }, [darkMode, dispatch]);

  return [darkMode, toggleSetDarkMode];
}
