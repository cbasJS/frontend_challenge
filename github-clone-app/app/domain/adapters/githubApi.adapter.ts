import { diffMins, nFormatter } from "@/application/utils/general.util"
import { GithubRepository } from "../entities/githubApi.entity"
import githubLangColors from '../../../github-lang-colors.json'

export const repositoryDataAdapter = (responseAPI: any[]): GithubRepository[] => {
  const langColor: { [key: string]: string } = githubLangColors

  return responseAPI.map((data) => ({
    name: data.name,
    description: data.description,
    isPrivate: data.private,
    specs: {
      license: data.license?.name || null,
      forks: nFormatter(Number(data.forks_count)),
      starts: nFormatter(Number(data.stargazers_count)),
      issues: nFormatter(Number(data.open_issues_count)),
      updatedAt: diffMins(data.updated_at),
      language: {
        name: data.language,
        color: langColor[data.language] || null
      }
    }
  })) as GithubRepository[]
}