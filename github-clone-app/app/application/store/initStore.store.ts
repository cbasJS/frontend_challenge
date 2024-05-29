import { AppState } from "@/domain/entities/store.entity"

export const initAppStore = (): AppState => {
  return { count: new Date().getFullYear() }
}