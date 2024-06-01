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

export const calculateDate = (dateToCompare: string): { large: string, short: string } => {
  const localDate = new Date()
  const compareDate = new Date(dateToCompare)
  const diffMs = Math.abs(compareDate.getTime() - localDate.getTime())

  const oneMinute = 1000 * 60;
  const oneHour = oneMinute * 60;
  const oneDay = oneHour * 24;
  const oneWeek = oneDay * 7;

  if (diffMs >= oneWeek) {
    const weeks = Math.floor(diffMs / oneWeek);
    return {
      large: `Updated ${weeks} week${weeks > 1 ? 's' : ''} ago`,
      short: `${weeks}w`
    };
  } else if (diffMs >= oneDay) {
    const days = Math.floor(diffMs / oneDay);
    return {
      large: `Updated ${days} day${days > 1 ? 's' : ''} ago`,
      short: `${days}d`
    };
  } else if (diffMs >= oneHour) {
    const hours = Math.floor(diffMs / oneHour);
    return {
      large: `Updated ${hours} hour${hours > 1 ? 's' : ''} ago`,
      short: `${hours}h`
    }
  } else {
    const minutes = Math.floor(diffMs / oneMinute);
    return {
      large: `Updated ${minutes} minute${minutes > 1 ? 's' : ''} ago`,
      short: `${minutes}m`
    };
  }
}

export const urlTypeParams = (): RepositoryTypeString => {
  const queryString = typeof window !== 'undefined' && window.location.search;
  const urlParams = new URLSearchParams(queryString || '')
  return Object.values(RepositoryType).find((val) => val === urlParams.get('type')) || 'all'
}

export const getParam = (url: string, paramName: string): string | null => {
  const urlSearchParams = new URLSearchParams(url);
  const param = urlSearchParams.get(paramName);
  return param
}
