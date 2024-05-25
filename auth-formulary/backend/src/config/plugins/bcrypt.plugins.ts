import bcrypt from "bcrypt";
import { saltRounds } from "./constans.plugins";

export const cryptPassword: (password: string) => Promise<string> = async (
  password
) => {
  const salt = await bcrypt.genSaltSync(saltRounds);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};
