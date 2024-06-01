import { GET_OPTIONS, DEFAULT_PARAMS } from "@/application/constants/githubApi.constants";
import { repositoryDataAdapter } from "@/domain/adapters/githubApi.adapter";
import { GithubRepository } from "@/domain/entities/githubApi.entity";
import { RepositoryTypeString } from "@/domain/enums/githubApi.enum";

type Params = { type: RepositoryTypeString }

async function getData(params?: Params): Promise<any> {
  try {
    const paramsToString = new URLSearchParams({
      ...DEFAULT_PARAMS,
      ...params
    }).toString()

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/orgs/${process.env.NEXT_PUBLIC_GITHUB_API_ORG}/repos?${paramsToString}`, GET_OPTIONS)

    const data = await response.json()

    return data;
  } catch (e) {
    console.error(e)
    return []
  }
}

export default async function getRepositories(params?: Params): Promise<GithubRepository[]> {
  const data = await getData(params);
  return repositoryDataAdapter(data);
}