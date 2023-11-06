import { knex } from "../../db";
import { User, Role, UserCreate } from "./types/user";

export const table = "users";

export const getUsers = async () => {
  const results = await knex<User>(table)
    .select(
      "users.id",
      "users.nom",
      "users.prenom",
      "users.nickname",
      "users.email",
      "users.id_role",
      "users.password",
      "roles.role"
    )
    .innerJoin("roles", "roles.id", "users.id_role");

  if (results && results.length) {
    return results;
  }

  return null;
};

export const getUserBy = async (
  id: string = "",
  email: string = "",
  password: string = ""
) => {
  const query = knex<User>(table)
    .select(
      "users.id",
      "users.nom",
      "users.prenom",
      "users.nickname",
      "users.email",
      "users.id_role",
      "users.password",
      "roles.role"
    )
    .innerJoin("roles", "roles.id", "users.id_role");
  if (id && !email && !password) {
    query.where("users.id", id);
  } else if (!id && email && password) {
    query.where({ email, password });
  } else if (!id && email && !password) {
    query.where({ email });
  }

  const results = await query;

  if (results && results.length) {
    return results[0];
  }

  return null;
};

export const putUserById = async (id: string, data: User) => {
  const existingUser = await knex<User>(table)
    .select("*")
    .where({ id })
    .first();

  if (!existingUser) {
    return null;
  }
  const updatedFields: Partial<User> = {};

  if (data.nom !== existingUser.nom && data.nom !== "") {
    updatedFields.nom = data.nom;
  }
  if (data.prenom !== existingUser.prenom && data.prenom !== "") {
    updatedFields.prenom = data.prenom;
  }
  if (data.email !== existingUser.email && data.email !== "") {
    updatedFields.email = data.email;
  }
  if (data.nickname !== existingUser.nickname && data.nickname !== "") {
    updatedFields.nickname = data.nickname;
  }

  if (data.role !== existingUser.role && data.role !== "") {
    const roles = await knex<Role>("roles").select("*");

    if (roles) {
      const roleIndex = roles.find((roleObj) => roleObj.role === data.role);
      if (roleIndex) updatedFields.id_role = roleIndex?.id;
      else return null;
    }
  }

  if (Object.keys(updatedFields).length === 0) {
    return null;
  }

  const results = await knex<User>(table)
    .update(updatedFields)
    .where({ id })
    .returning("id");

  if (results) return results[0];

  return null;
};

export const createUser = async (data: UserCreate) => {
  const results: number[] = await knex<User>(table)
    .insert({ ...data })
    .returning("id");

  return results[0];
};

export const removeUserById = async (id: string) => {
  return knex<number>(table).where("id", id).del();
};

export const getRoles = async () => {
  const results = await knex<Role>("roles").select("*");

  if (results && results.length) {
    return results;
  }

  return null;
};
