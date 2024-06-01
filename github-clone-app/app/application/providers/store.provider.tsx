"use client";

import { createContext, useRef } from "react";
import type { StoreApi } from "zustand";

import type {
  AppStore,
  AppStoreProviderProps,
} from "@/domain/entities/store.entity";
import { initAppStore } from "@/application/store/initStore.store";
import { createAppStore } from "@/application/store/app.store";

export const AppStoreContext = createContext<StoreApi<AppStore> | null>(null);

export const AppStoreProvider = ({ children }: AppStoreProviderProps) => {
  const storeRef = useRef<StoreApi<AppStore>>();

  if (!storeRef.current) {
    storeRef.current = createAppStore(initAppStore());
  }

  return (
    <AppStoreContext.Provider value={storeRef.current}>
      {children}
    </AppStoreContext.Provider>
  );
};
