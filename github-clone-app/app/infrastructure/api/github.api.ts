import { DEFAULT_PARAMS, GET_REPOS_LINK, HEADERS, NEXT_PATTERN, PREV_PATTERN } from "@/application/constants/githubApi.constants";
import { getParam } from "@/application/utils/general.util";
import { repositoryDataAdapter } from "@/domain/adapters/githubApi.adapter";
import type { GithubAPIParams, GithubRepository } from "@/domain/entities/githubApi.entity";
import { Octokit } from "octokit";

const octokit = new Octokit({});


async function getData(params: GithubAPIParams): Promise<any> {
  try {
    const response = await octokit.request(GET_REPOS_LINK, {
      ...DEFAULT_PARAMS,
      ...params,
      headers: HEADERS,
    });

    const data = response.data || []

    const linkHeader = response.headers.link;

    const hasNextPage = linkHeader && linkHeader.includes(`rel=\"next\"`);
    const nextPageLink = hasNextPage && linkHeader.match(NEXT_PATTERN);

    const hasPrevPage = linkHeader && linkHeader.includes(`rel=\"prev\"`);
    const prevPageLink = hasPrevPage && linkHeader.match(PREV_PATTERN);

    const pageInfo = {
      nextPage: getParam(nextPageLink ? nextPageLink[0] : '', 'page'),
      prevPage: getParam(prevPageLink ? prevPageLink[0] : '', 'page')
    }

    return { data, pageInfo };
  } catch (e) {
    console.error(e)
    return { data: [], pageInfo: { nextPage: null, prevPage: null } }
  }
}

export default async function getRepositories(params: GithubAPIParams): Promise<GithubRepository> {
  const data = await getData(params);
  return repositoryDataAdapter(data);
}