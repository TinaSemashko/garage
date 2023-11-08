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
import { getHoraires, updateHorairesById } from "./src/controllers/horaires";
import * as horairesModel from "./src/models/horaires";
import {
  getAllTypes,
  getAllModeles,
  getAllMarques,
  createNewProduit,
  updateProduitById,
  removeProduit,
  getAllProduits,
  createNewAvis,
  getAllAvisById,
} from "./src/controllers/produits";
import * as produitModel from "./src/models/produits";

import {
  validateHasParameters,
  validateEmailFormat,
  validatePasswordLength,
} from "./src/middleware/validation";
import { checkAuthToken } from "./src/middleware/auth";

const router = Router();
// Register an user
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
//Authenticate a user login session using input email and password if valid.
router.post(
  "/login",
  validateHasParameters("email", "password"),
  login(userModel)
);
router.get("/users", checkAuthToken(true), getAllUsers(userModel));
router.put("/update", checkAuthToken(true), updateUserById(userModel));
router.delete("/delete", checkAuthToken(true), removeUser(userModel));
router.get("/roles", getAllRoles(userModel));

router.get("/horaires", getHoraires(horairesModel));
router.put(
  "/updhoraires",
  checkAuthToken(true),
  updateHorairesById(horairesModel)
);

router.get("/types", getAllTypes(produitModel));
router.get("/modeles", getAllModeles(produitModel));
router.get("/marques", getAllMarques(produitModel));
router.post("/createproduct", checkAuthToken(), createNewProduit(produitModel));
router.put("/updproduct", checkAuthToken(), updateProduitById(produitModel));
router.delete("/delproduct", checkAuthToken(), removeProduit(produitModel));
router.get("/products", getAllProduits(produitModel));
router.post("/createavis", checkAuthToken(), createNewAvis(produitModel));
router.get("/geteavis/:id", getAllAvisById(produitModel));

export default router;
