import type { RepositorySortString, RepositorySortDirectionString } from "@/domain/enums/githubApi.enum";

export type DisplayModesType = {
  id: number
  value: 'Default' | 'Compact'
}

export const displayModes: DisplayModesType[] = [
  { id: 1, value: "Default" },
  { id: 2, value: "Compact" },
];

export type GithubAPISortOptions = {
  id: any
  value: RepositorySortString
}

export const githubAPISortOptions: GithubAPISortOptions[] = [
  { id: 1, value: "created" },
  { id: 2, value: "full_name" },
  { id: 3, value: "pushed" },
  { id: 4, value: "updated" }
]

export type GithubAPISortDirectionOptions = {
  id: any
  value: RepositorySortDirectionString
}

export const githubAPISortDirectionOptions: GithubAPISortDirectionOptions[] = [
  { id: 1, value: "asc" },
  { id: 2, value: "desc" },
]