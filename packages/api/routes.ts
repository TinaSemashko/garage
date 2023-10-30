import { Router } from "express";

import { getAllUsers, login, createNewUser } from "./src/controllers/user";
import * as userModel from "./src/models/user";
import { getAllRoles } from "./src/controllers/user";
import {
  validateHasParameters,
  validateEmailFormat,
  validatePasswordLength,
} from "./src/middleware/validation";

const router = Router();

/**
 * Register an user
 */
router.post(
  "/register",
  validateHasParameters(
    "email",
    "password",
    "nom",
    "prenom",
    "nickname",
    "id_role"
  ),
  validateEmailFormat,
  validatePasswordLength,
  createNewUser(userModel)
);

/**
 * Authenticate a user login session using input email and password if valid.
 */
router.post("/login", validateHasParameters("email", "password"), login);
router.get("/users", getAllUsers(userModel));
router.get("/roles", getAllRoles(userModel));

export default router;
