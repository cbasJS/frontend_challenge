
export const HEADERS = {
  'Accept': process.env.NEXT_PUBLIC_GITHUB_API_ACCEPT as string,
  'Authorization': `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
  'X-GitHub-Api-Version': process.env.NEXT_PUBLIC_GITHUB_API_VERSION as string
}

export const GET_OPTIONS: RequestInit = {
  method: "GET",
  headers: HEADERS,
}

export const DEFAULT_PARAMS = {
  sort: 'updated',
  per_page: '30',
  direction: 'desc',
  page: "3"
}

export const GET_REPOS_LINK = `GET ${process.env.NEXT_PUBLIC_API_URL}/orgs/${process.env.NEXT_PUBLIC_GITHUB_API_ORG}/repos` as string

export const NEXT_PATTERN = /(?<=<)([\S]*)(?=>; rel="next")/i;
export const LAST_PATTERN = /(?<=<)([\S]*)(?=>; rel="last")/i;
export const PREV_PATTERN = /(?<=<)([\S]*)(?=>; rel="prev")/i;
