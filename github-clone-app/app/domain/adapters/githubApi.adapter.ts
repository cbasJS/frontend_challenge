import { calculateDate, nFormatter } from "@/application/utils/general.util"
import { GithubRepository, GithubRepositoryData, GithubRepositoryPageInfo } from "../entities/githubApi.entity"
import githubLangColors from '../../../github-lang-colors.json'

export const repositoryDataAdapter = (response: any): GithubRepository => {
  const langColor: { [key: string]: string | null } = githubLangColors

  const data = response.data.map((_: any) => ({
    name: _.name,
    description: _.description,
    isPrivate: _.private,
    specs: {
      language: _.language ? {
        name: _.language,
        color: langColor[_.language]
      } : null,
      license: _.license?.name || null,
      forks: nFormatter(Number(_.forks_count)),
      starts: nFormatter(Number(_.stargazers_count)),
      issues: nFormatter(Number(_.open_issues_count)),
      updatedAt: calculateDate(_.updated_at),
    }
  })) as GithubRepositoryData[]

  const pageInfo: GithubRepositoryPageInfo = {
    nextPage: response.pageInfo.nextPage,
    prevPage: response.pageInfo.prevPage
  }

  return { data, pageInfo }
}