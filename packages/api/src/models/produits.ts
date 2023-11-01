import { knex } from "../../db";
import { Types, Produits } from "./types/produits";

export const table = "produits";

export const getTypes = async () => {
  const results = await knex<Types>("types").select("*");

  if (results && results.length) {
    return results;
  }

  return null;
};

// export const getUserBy = async (
//   id: string = "",
//   email: string = "",
//   password: string = ""
// ) => {
//   console.log(id);
//   const query = knex<User>(table)
//     .select("*")
//     .leftJoin("roles", "roles.id", "users.id_role");
//   if (id && !email && !password) {
//     query.where("users.id", id);
//   } else if (!id && email && password) {
//     query.where({ email, password });
//   } else if (!id && email && !password) {
//     query.where({ email });
//   }

//   const results = await query;

//   if (results && results.length) {
//     return results[0];
//   }

//   return null;
// };

// export const putUserById = async (id: string, data: User) => {
//   const existingUser = await knex<User>(table)
//     .select("*")
//     .where({ id })
//     .first();

//   if (!existingUser) {
//     return null;
//   }
//   const updatedFields: Partial<User> = {};

//   if (data.email !== existingUser.email && data.email !== "") {
//     updatedFields.email = data.email;
//   }

//   if (Object.keys(updatedFields).length === 0) {
//     return null;
//   }

//   const results = await knex<User>(table)
//     .update(updatedFields)
//     .where({ id })
//     .returning("id");

//   if (results) return results[0];

//   return null;
// };

// export const createUser = async (data: User) => {
//   const results: number[] = await knex<User>(table)
//     .insert({ ...data })
//     .returning("id");

//   return results[0];
// };

// export const removeUserById = async (id: string) => {
//   return knex<number>(table).where("id", id).del();
// };

// export const getRoles = async () => {
//   const results = await knex<any>("roles").select("*");

//   if (results && results.length) {
//     return results;
//   }

//   return null;
// };
