import jwt, { JwtPayload } from "jsonwebtoken";
import * as userModel from "../models/user";
const { AUTH_TOKEN_KEY } = process.env;

export const checkAuthToken = async (req: any, res: any, next: any) => {
  const auth_token = req.headers["x-access-token"] as string;

  try {
    if (!auth_token) {
      throw new Error("Unauthorized");
    }

    const decodedUserInfo = jwt.verify(
      auth_token,
      AUTH_TOKEN_KEY!
    ) as JwtPayload;
    // Check if user actually exist in db
    const user = await userModel.getUserBy(decodedUserInfo.id as string);

    if (!user) {
      throw new Error("Unauthorized");
    }

    req.user = { ...user, ...decodedUserInfo };
  } catch (error) {
    return res.status(403).json({ error: "Unauthorized" });
  }

  return next();
};
