import { AxiosRequestConfig, RawAxiosRequestHeaders } from "axios";

export const HEADERS_OPTIONS: RawAxiosRequestHeaders = {
  Accept: process.env.NEXT_PUBLIC_GITHUB_API_ACCEPT,
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
  'X-GitHub-Api-Version': process.env.NEXT_PUBLIC_GITHUB_API_VERSION
}

export const GET_OPTIONS: AxiosRequestConfig = {
  method: "GET",
  headers: HEADERS_OPTIONS,
  params: {
    sort: 'updated',
    per_page: '30',
    direction: 'desc',
    type: 'all'
  }
};