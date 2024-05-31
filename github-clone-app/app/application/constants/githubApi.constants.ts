export const HEADERS: HeadersInit = {
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
}