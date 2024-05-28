export interface UserAPIBody {
  mail: string;
  userName: string;
  password: string;
}

export type UserAPIData = {
  mail: string
  createdAt: string
  userName: string
  token: string
}
export interface LoginAPIResponse {
  status: string,
  message: string,
  data: UserAPIData | null
}
