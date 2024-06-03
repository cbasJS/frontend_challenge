export enum RepositoryType {
  all = 'all',
  public = 'public',
  sources = 'sources',
  forks = 'forks',
  archived = 'archived',
  template = 'template',
}

export type RepositoryTypeString = keyof typeof RepositoryType;

export enum RepositorySpecs {
  language = 'language',
  license = 'license',
  forks = 'forks',
  starts = 'starts',
  issues = 'issues',
  updatedAt = 'updatedAt'
}

export type RepositorySpecsString = keyof typeof RepositorySpecs;

export enum RepositorySort {
  created = "created",
  updated = "updated",
  pushed = "pushed",
  full_name = "full_name"
}

export type RepositorySortString = keyof typeof RepositorySort;

export enum RepositorySortDirection {
  asc = 'asc',
  desc = 'desc'
}

export type RepositorySortDirectionString = keyof typeof RepositorySortDirection;
