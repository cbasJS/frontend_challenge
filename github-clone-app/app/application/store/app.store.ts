// src/stores/counter-store.ts
import { createStore } from 'zustand/vanilla'
import { defaultInitState } from './initState.store'
import { AppState, AppStore } from '@/domain/entities/store.entity'


export const createAppStore = (
  initState: AppState = defaultInitState,
) => {
  return createStore<AppStore>()((set) => ({
    ...initState,
    decrementCount: () => set((state) => ({ count: state.count - 1 })),
    incrementCount: () => set((state) => ({ count: state.count + 1 })),
  }))
}