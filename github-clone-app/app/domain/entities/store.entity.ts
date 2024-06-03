import type { ReactNode } from "react"
import type { RepositoryTypeString, RepositorySortDirectionString, RepositorySortString } from "../enums/githubApi.enum"

export type AppState = {
  repositoryType: RepositoryTypeString
  isRepositoriesTypeDialogOpen: boolean
  currentPage: string
  sortBy: RepositorySortString
  sortDirection: RepositorySortDirectionString
}

export type AppActions = {
  changeRepositoryType: (type: RepositoryTypeString) => void
  openRepositoriesTypeDialog: () => void
  closeRepositoriesTypeDialog: () => void
  changeCurrentPage: (page: string) => void
  changeRepositorySort: (sortBy: RepositorySortString) => void
  changeRepositorySortDirection: (value: RepositorySortDirectionString) => void
}

export interface AppStoreProviderProps {
  children: ReactNode;
}

export type AppStore = AppState & AppActions