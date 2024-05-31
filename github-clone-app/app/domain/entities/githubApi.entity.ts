type GithubRepositorySpecs = {
  license: string | null
  language: {
    name: string
    color: string | null
  }
  forks: string
  starts: string
  issues: string
  updatedAt: string
}

export interface GithubRepository {
  name: string
  description: string
  isPrivate: boolean
  specs: GithubRepositorySpecs
}