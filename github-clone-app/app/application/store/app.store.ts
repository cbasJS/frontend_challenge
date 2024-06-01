import { createStore } from 'zustand/vanilla'
import { defaultInitState } from './initState.store'
import { AppState, AppStore } from '@/domain/entities/store.entity'


export const createAppStore = (
  initState: AppState = defaultInitState,
) => {
  return createStore<AppStore>()((set) => ({
    ...initState,
    changeRepositoryType: (type) => set(() => ({ repositoryType: type })),
    openRepositoriesTypeDialog: () => set(() => ({ isRepositoriesTypeDialogOpen: true })),
    closeRepositoriesTypeDialog: () => set(() => ({ isRepositoriesTypeDialogOpen: false })),
    changeCurrentPage: (page) => set(() => ({ currentPage: page })),
  }))
}