import { RepositoryType, RepositoryTypeString } from "@/domain/enums/githubApi.enum";

export const nFormatter = (num: number, digits: number = 0): string => {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" }
  ];
  const regexp = /\.0+$|(?<=\.[0-9]*[1-9])0+$/;
  const item = lookup.findLast(item => num >= item.value);
  return item ? (num / item.value).toFixed(digits).replace(regexp, "").concat(item.symbol) : "0";
}

export const diffMins = (dateToCompare: string): string => {
  const localDate = new Date()
  const compareDate = new Date(dateToCompare)
  const diffMs = Math.abs(compareDate.getTime() - localDate.getTime())
  const minutes = Math.floor((diffMs / 1000) / 60);

  return `Updated ${minutes} minutes ago`
}

export const urlTypeParams = (): RepositoryTypeString => {
  const queryString = typeof window !== 'undefined' && window.location.search;
  const urlParams = new URLSearchParams(queryString || '')
  return Object.values(RepositoryType).find((val) => val === urlParams.get('type')) || 'all'
}
