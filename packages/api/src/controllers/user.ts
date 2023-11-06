import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as userModel from "../models/user";

type User = typeof userModel;

const { ENCRYPTION_KEY, AUTH_TOKEN_KEY } = process.env;

export const login = (model: User) => async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    // Check if user exist AND password supplied is correct

    const id = "";
    const user = await model.getUserBy(id as string, email as string);

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

      return res.status(200).json({
        success: true,
        user: {
          user_id: user.id,
          email: user.email,
          nom: user.nom,
          prenom: user.prenom,
          nickname: user.nickname,
          auth_token: authToken,
          id_role: user.id_role,
          role: user.role,
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

      // Encrypt user password
      const passwordHash = await bcrypt.hash(
        data.password,
        parseInt(ENCRYPTION_KEY!)
      );

      // Create auth token with user info and expiry date
      const userData = {
        id: data.id,
        nom: data.nom,
        prenom: data.prenom,
        nickname: data.nickname,
        email: data.email,
        id_role: data.id_role,

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

export const updateUserById =
  (model: User) => async (req: Request, res: Response) => {
    const { id, data } = req.body;

    const userId = await model.putUserById(id as string, data as any);

    if (!userId) {
      return res.status(400).send({ message: "User doesn't modified" });
    }

    res.send({ results: [userId] });
  };

export const removeUser =
  (model: User) => async (req: Request, res: Response) => {
    const { id } = req.body;

    const userId = await model.removeUserById(id as string);

    if (!userId) {
      return res.status(400).send({ message: "User has not been deleted..." });
    }

    res.send({ results: [userId] });
  };

export const getAllRoles =
  (model: User) => async (req: Request, res: Response) => {
    const role = await model.getRoles();

    if (!role) {
      return res.status(404).send({ message: "No roles" });
    }

    res.send({ results: [role] });
  };
