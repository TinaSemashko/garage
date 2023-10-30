import joi from "joi";

export const createUserSchema = {
  id: joi.string().required(),
  nom: joi.string().required(),
  prenom: joi.string().required(),
  nickname: joi.string().required(),
  email: joi.string().required(),
  role: joi.string().required(),
  password: joi.string().required(),
};
