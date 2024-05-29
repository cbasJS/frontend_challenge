import type { ReactNode } from "react"

export type AppState = {
  count: number
}

export type AppActions = {
  decrementCount: () => void
  incrementCount: () => void
}

export interface AppStoreProviderProps {
  children: ReactNode;
}

export type AppStore = AppState & AppActions