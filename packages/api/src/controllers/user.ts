import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as userModel from "../models/user";

type User = typeof userModel;
const { ENCRYPTION_KEY, AUTH_TOKEN_KEY } = process.env;

export const login = (model: User) => async (req: Request, res: Response) => {
  const { email, password } = req.query;

  try {
    // Check if user exist AND password supplied is correct

    const user = await model.getUserBy(email as string, password as string);

    if (!user) {
      return res.status(404).send({ message: "User doesn't existe" });
    }

    const userExists = !!user;
    const passwordCorrect =
      userExists && (await bcrypt.compare(password as string, user.password));
    if (passwordCorrect) {
      const jwtOptions = {
        expiresIn: "24h", // Expire token in 24 hours
      };

      const authToken = jwt.sign(user, AUTH_TOKEN_KEY!, jwtOptions);

      //res.status(200).send({ results: [user] });

      return res.status(200).send({
        //json?
        success: true,
        user: {
          user_id: user.id,
          email: user.email,
          name: user.nom,
          auth_token: authToken,
        },
      });
    }

    return res.status(400).json({ error: "Invalid password" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: `Server Error` });
  }
};

export const getAllUsers =
  (model: User) => async (req: Request, res: Response) => {
    const user = await model.getUsers();

    if (!user) {
      return res.status(404).send({ message: "No users" });
    }

    res.send({ results: [user] });
  };

export const createNewUser =
  (model: User) => async (req: Request, res: Response) => {
    const data = req.body;

    try {
      const userExist = await model.getUserBy(
        data.id as string,
        data.email as string,
        data.password as string
      );

      if (userExist) {
        return res.status(409).json({ error: "User already exist" });
      }
      console.log("data.password ", data.password);
      console.log("ENCRYPTION_KEY ", ENCRYPTION_KEY);
      // Encrypt user password
      const passwordHash = await bcrypt.hash(data.password, ENCRYPTION_KEY!);
      console.log(passwordHash);
      // Create auth token with user info and expiry date
      const userData = {
        id: data.id,
        nom: data.nom,
        prenom: data.prenom,
        nickname: data.nickname,
        email: data.email,
        role: data.id_role,
        password: passwordHash,
      };

      // Persist user data
      await model.createUser(userData);

      const jwtOptions = {
        expiresIn: "24h", // Expire token in 24 hours
      };

      const authToken = jwt.sign(userData, AUTH_TOKEN_KEY!, jwtOptions);

      return res.status(200).send({
        success: true,
        user: {
          user_id: userData.id,
          email: userData.email,
          name: userData.nom,
          auth_token: authToken,
        },
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: `Internal Error` });
    }
  };

export const getAllRoles =
  (model: User) => async (req: Request, res: Response) => {
    const role = await model.getRoles();

    if (!role) {
      return res.status(404).send({ message: "No roles" });
    }

    res.send({ results: [role] });
  };
