import { knex } from "../../db";
import {
  Types,
  Produits,
  Marques,
  Modeles,
  ProduitsUpd,
  Avis,
} from "./types/produits";

export const table = "produits";

export const getTypes = async () => {
  const results = await knex<Types>("types").select("*");

  if (results && results.length) {
    return results;
  }

  return null;
};

export const getModeles = async () => {
  const results = await knex<Modeles>("modeles").select("*");

  if (results && results.length) {
    return results;
  }

  return null;
};

export const getMarques = async () => {
  const results = await knex<Marques>("marques").select("*");

  if (results && results.length) {
    return results;
  }

  return null;
};

export const createProduit = async (data: any) => {
  const photoBuffer = Buffer.from(data.image, "base64");
  const results: number[] = await knex<Produits>(table)
    .insert({ ...data, image: photoBuffer })
    .returning("id");

  return results[0];
};

export const putProduitById = async (id: string, data: ProduitsUpd) => {
  const existingUser = await knex<ProduitsUpd>(table)
    .select("*")
    .where({ id })
    .first();

  if (!existingUser) {
    return null;
  }
  const updatedFields: Partial<ProduitsUpd> = {};

  if (data.title !== existingUser.title && data.title !== "") {
    updatedFields.title = data.title;
  }
  if (data.annee !== existingUser.annee && data.annee !== "") {
    updatedFields.annee = data.annee;
  }
  if (data.prix !== existingUser.prix && data.prix !== "") {
    updatedFields.prix = data.prix;
  }
  if (
    data.kilometrage !== existingUser.kilometrage &&
    data.kilometrage !== ""
  ) {
    updatedFields.kilometrage = data.kilometrage;
  }
  if (
    data.puissance_fiscale !== existingUser.puissance_fiscale &&
    data.puissance_fiscale !== ""
  ) {
    updatedFields.puissance_fiscale = data.puissance_fiscale;
  }
  if (
    data.puissance_motor !== existingUser.puissance_motor &&
    data.puissance_motor !== ""
  ) {
    updatedFields.puissance_motor = data.puissance_motor;
  }
  if (
    data.boite_vitesse !== existingUser.boite_vitesse &&
    data.boite_vitesse !== ""
  ) {
    updatedFields.boite_vitesse = data.boite_vitesse;
  }

  if (data.type !== existingUser.type && data.type !== "") {
    const types = await knex<Types>("types").select("*");

    if (types) {
      const typeIndex = types.find((typeObj) => typeObj.type === data.type);
      if (typeIndex) updatedFields.id_type = typeIndex?.id;
      else return null;
    }
  }

  if (Object.keys(updatedFields).length === 0) {
    return null;
  }

  const results = await knex<ProduitsUpd>(table)
    .update(updatedFields)
    .where({ id })
    .returning("id");

  if (results) return results[0];

  return null;
};

export const removeProduitById = async (id: string) => {
  return knex<number>(table).where("id", id).del();
};

export const getProduits = async () => {
  const results = await knex<ProduitsUpd>(table)
    .select(
      knex.raw("ENCODE(image, 'base64') as image"),
      "produits.id",
      "produits.title",
      "produits.id_type",
      "produits.annee",
      "produits.prix",
      "produits.kilometrage",
      "produits.id_marque",
      "produits.id_modele",
      "produits.puissance_fiscale",
      "produits.puissance_motor",
      "produits.boite_vitesse",
      "types.type",
      "modeles.modele",
      "marques.marque"
    )
    .innerJoin("types", "types.id", "produits.id_type")
    .innerJoin("modeles", "modeles.id", "produits.id_modele")
    .innerJoin("marques", "marques.id", "produits.id_marque")
    .orderBy("id", "asc");

  if (results && results.length) {
    return results;
  }

  return null;
};

export const createAvis = async (data: any) => {
  const results: number[] = await knex<Avis>("avis")
    .insert({ ...data })
    .returning("id");

  return results[0];
};

export const getAvisById = async (id: string) => {
  const results = await knex<Avis>("avis")
    .select("avis.message", "avis.note", "avis.id_produit", "users.nickname")
    .innerJoin("users", "users.id", "avis.id_user")
    .where("id_produit", id);

  if (results && results.length) {
    return results;
  }

  return null;
};
