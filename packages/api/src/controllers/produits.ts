import { Request, Response } from "express";

import * as produitsModel from "../models/produits";

type Produit = typeof produitsModel;

export const getAllTypes =
  (model: Produit) => async (req: Request, res: Response) => {
    const types = await model.getTypes();

    if (!types) {
      return res.status(404).send({ message: "No types" });
    }

    res.send({ results: [types] });
  };

// export const createNewUser =
//   (model: User) => async (req: Request, res: Response) => {
//     const data = req.body;

//     try {
//       const userExist = await model.getUserBy(
//         data.id as string,
//         data.email as string,
//         data.password as string
//       );

//       if (userExist) {
//         return res.status(409).json({ error: "User already exist" });
//       }

//       // Encrypt user password
//       const passwordHash = await bcrypt.hash(
//         data.password,
//         parseInt(ENCRYPTION_KEY!)
//       );

//       // Create auth token with user info and expiry date
//       const userData = {
//         id: data.id,
//         nom: data.nom,
//         prenom: data.prenom,
//         nickname: data.nickname,
//         email: data.email,
//         id_role: data.id_role,
//         password: passwordHash,
//       };

//       // Persist user data
//       await model.createUser(userData);

//       const jwtOptions = {
//         expiresIn: "24h", // Expire token in 24 hours
//       };

//       const authToken = jwt.sign(userData, AUTH_TOKEN_KEY!, jwtOptions);

//       return res.status(200).send({
//         success: true,
//         user: {
//           user_id: userData.id,
//           email: userData.email,
//           name: userData.nom,
//           auth_token: authToken,
//         },
//       });
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ error: `Internal Error` });
//     }
//   };

// export const getAllRoles =
//   (model: User) => async (req: Request, res: Response) => {
//     const role = await model.getRoles();

//     if (!role) {
//       return res.status(404).send({ message: "No roles" });
//     }

//     res.send({ results: [role] });
//   };
