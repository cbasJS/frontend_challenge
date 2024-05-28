import jwt from "jsonwebtoken";
import { expiresIn, secretKey } from "./constans.plugins";

export const generateJWT: (username: string) => Promise<string> = async (
  username
) => {
  const token = await jwt.sign({ username }, secretKey, { expiresIn });
  return token;
};
