import bcrypt from "bcrypt";
import { saltRounds } from "./constans.plugins";

export const cryptPassword: (password: string) => Promise<string> = async (
  password
) => {
  const salt = await bcrypt.genSaltSync(saltRounds);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

export const validateCryptPassword: (
  plainTextPassword: string,
  hashPassword: string
) => Promise<Boolean> = async (plainTextPassword, hashPassword) => {
  const isValid = await bcrypt.compareSync(plainTextPassword, hashPassword);
  return isValid;
};
