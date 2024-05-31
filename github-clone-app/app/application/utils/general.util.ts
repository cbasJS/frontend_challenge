import { RepositoryType, RepositoryTypeString } from "@/domain/enums/githubApi.enum";

export const urlTypeParams = (): RepositoryTypeString => {
  const queryString = typeof window !== 'undefined' && window.location.search;
  const urlParams = new URLSearchParams(queryString || '')
  return Object.values(RepositoryType).find((val) => val === urlParams.get('type')) || 'all'
}
