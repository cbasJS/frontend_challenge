import { AppState } from "@/domain/entities/store.entity"
import { urlTypeParams } from "../utils/general.util"


export const initAppStore = (): AppState => {
  return { repositoryType: urlTypeParams(), isRepositoriesTypeDialogOpen: false, currentPage: "1" }
}