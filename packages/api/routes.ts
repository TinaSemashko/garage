import { Router } from "express";

import {
  getAllUsers,
  login,
  createNewUser,
  getAllRoles,
  updateUserById,
  removeUser,
} from "./src/controllers/user";
import * as userModel from "./src/models/user";
import { getAllTypes } from "./src/controllers/produits";
import * as produitModel from "./src/models/produits";

import {
  validateHasParameters,
  validateEmailFormat,
  validatePasswordLength,
} from "./src/middleware/validation";
import { checkAuthToken } from "./src/middleware/auth";

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
router.post(
  "/login",
  validateHasParameters("email", "password"),
  login(userModel)
);
router.get("/users", checkAuthToken(true), getAllUsers(userModel));
router.put("/update", checkAuthToken(true), updateUserById(userModel));
router.delete("/delete", checkAuthToken(true), removeUser(userModel));
router.get("/roles", getAllRoles(userModel));

router.get("/types", getAllTypes(produitModel));

export default router;
