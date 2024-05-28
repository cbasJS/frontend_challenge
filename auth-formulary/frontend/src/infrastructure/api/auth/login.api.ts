import axios from "axios";
import { loginAdapterResponse } from "./login.adapter";
import { LoginAPIResponse } from "../../../domain/entities/user.entity";

export const getUserCallback = (mail: string, password: string): Promise<LoginAPIResponse> => {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/api/login`, {
      params: { mail, password },
    })
    .then(loginAdapterResponse);
};