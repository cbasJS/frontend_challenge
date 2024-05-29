import { GET_OPTIONS } from "@/application/constants/axios.constants";
import axios from "axios";

async function getData() {
  const response = axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/orgs/${process.env.NEXT_PUBLIC_GITHUB_API_ORG}/repos`,
    GET_OPTIONS
  )
    .then((response) => response)
    .catch((err) => console.error(err));

  return response;
}

export default async function getRepositories() {
  const data = await getData();
  return data;
}