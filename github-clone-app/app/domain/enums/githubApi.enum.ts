export enum RepositoryType {
  all = 'all',
  public = 'public',
  sources = 'sources',
  forks = 'forks',
  archived = 'archived',
  template = 'template',
}

export type RepositoryTypeString = keyof typeof RepositoryType;