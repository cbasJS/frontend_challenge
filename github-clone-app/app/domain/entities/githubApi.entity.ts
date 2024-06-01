export type GithubRepositorySpecs = {
  license: string | null
  language: {
    name: string
    color: string | null
  } | null
  forks: string
  starts: string
  issues: string
  updatedAt: {
    large: string
    short: string
  }
}

export type GithubRepositoryData = {
  name: string
  description: string
  isPrivate: boolean
  specs: GithubRepositorySpecs
}

export type GithubRepositoryPageInfo = {
  nextPage: string | null
  prevPage: string | null
}

export interface GithubRepository {
  data: GithubRepositoryData[]
  pageInfo: GithubRepositoryPageInfo
}