import { LoginAPIResponse } from "../../../domain/entities/user.entity";

export const loginAdapterResponse: (response: any) => LoginAPIResponse = (response) => {
  return {
    status: response.data.status,
    message: response.data.message,
    data: response.data.data
  }
}