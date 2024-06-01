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

export interface GithubRepository {
  name: string
  description: string
  isPrivate: boolean
  specs: GithubRepositorySpecs
}