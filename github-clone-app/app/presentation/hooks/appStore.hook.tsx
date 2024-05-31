import { useContext } from "react";
import { useStore } from "zustand";
import { AppStore } from "@/domain/entities/store.entity";
import { AppStoreContext } from "@/application/providers/store.provider";

export const useAppStore = <T,>(selector: (store: AppStore) => T): T => {
  const appStoreContext = useContext(AppStoreContext);

  if (!appStoreContext) {
    throw new Error(`useStore must be use within AppStoreProvider`);
  }

  return useStore(appStoreContext, selector);
};
