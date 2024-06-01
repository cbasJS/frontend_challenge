import type { ReactNode } from "react"
import { RepositoryTypeString } from "../enums/githubApi.enum"

export type AppState = {
  repositoryType: RepositoryTypeString
  isRepositoriesTypeDialogOpen: boolean
  currentPage: string
}

export type AppActions = {
  changeRepositoryType: (type: RepositoryTypeString) => void
  openRepositoriesTypeDialog: () => void
  closeRepositoriesTypeDialog: () => void
  changeCurrentPage: (page: string) => void
}

export interface AppStoreProviderProps {
  children: ReactNode;
}

export type AppStore = AppState & AppActions