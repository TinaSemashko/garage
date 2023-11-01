import jwt, { JwtPayload } from "jsonwebtoken";
import * as userModel from "../models/user";
const { AUTH_TOKEN_KEY } = process.env;

export const checkAuthToken = (adminAuth: boolean = false) => {
  return async (req: any, res: any, next: any) => {
    const auth_token = req.headers["x-access-token"] as string;

    try {
      if (!auth_token) {
        throw new Error("Unauthorized(tocken)");
      }

      const decodedUserInfo = jwt.verify(
        auth_token,
        AUTH_TOKEN_KEY!
      ) as JwtPayload;

      // Check if user actually exist in db
      const user = await userModel.getUserBy(
        "",
        decodedUserInfo.email as string
      );

      if (
        (!user && !adminAuth) ||
        (adminAuth && (!user || user.role !== "administrateur"))
      ) {
        throw new Error("Unauthorized(role)");
      }

      req.user = { ...user, ...decodedUserInfo };
    } catch (error: any) {
      return res.status(403).json({ error: error.message });
    }

    return next();
  };
};
