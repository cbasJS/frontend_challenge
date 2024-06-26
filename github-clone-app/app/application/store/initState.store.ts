import { AppState } from "@/domain/entities/store.entity";

export const defaultInitState: AppState = {
  repositoryType: 'all',
  isRepositoriesTypeDialogOpen: false,
  currentPage: "1",
  sortBy: "updated",
  sortDirection: "desc"
}