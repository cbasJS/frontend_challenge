import type { ReactNode } from "react"
import { RepositoryTypeString } from "../enums/githubApi.enum"

export type AppState = {
  repositoryType: RepositoryTypeString
  isRepositoriesTypeDialogOpen: boolean
}

export type AppActions = {
  changeRepositoryType: (type: RepositoryTypeString) => void
  openRepositoriesTypeDialog: () => void
  closeRepositoriesTypeDialog: () => void
}

export interface AppStoreProviderProps {
  children: ReactNode;
}

export type AppStore = AppState & AppActions