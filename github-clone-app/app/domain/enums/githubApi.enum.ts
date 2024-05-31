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
