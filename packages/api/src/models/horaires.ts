import { string } from "joi";
import { knex } from "../../db";
import { Horaires } from "./types/horaires";

export const table = "horaries";

export const getHoraires = async () => {
  const results = await knex<Horaires>(table).select("*").orderBy("id", "asc");

  if (results && results.length) {
    return results;
  }

  return null;
};

export const putHorairesById = async (data: any) => {
  let dataresults: any[] = [];

  data.map(async (item: Horaires, index: number) => {
    const existingUser = await knex<Horaires>(table)
      .select("*")
      .where("jour", item.jour)
      .first();

    if (!existingUser) {
      return null;
    }
    const updatedFields: Partial<Horaires> = {};

    if (
      item.debut !== existingUser.debut &&
      item.debut !== "" &&
      item.debut !== undefined
    ) {
      updatedFields.debut = item.debut;
    }
    if (
      item.debutDej !== existingUser.debutDej &&
      item.debutDej !== "" &&
      item.debutDej !== undefined
    ) {
      updatedFields.debutDej = item.debutDej;
    }
    if (
      item.finDej !== existingUser.finDej &&
      item.finDej !== "" &&
      item.finDej !== undefined
    ) {
      updatedFields.finDej = item.finDej;
    }
    if (
      item.fin !== existingUser.fin &&
      item.fin !== "" &&
      item.fin !== undefined
    ) {
      updatedFields.fin = item.fin;
    }

    if (Object.keys(updatedFields).length === 0) {
      return null;
    }

    const results = await knex<Horaires>(table)
      .update(updatedFields)
      .where("jour", item.jour)
      .returning("id");

    if (results) dataresults.push(results[0]);
    console.log(dataresults.length);
    console.log(index);
    if ((dataresults.length = index)) return dataresults;
  });

  // if (dataresults.length) return dataresults;

  return null;
};
