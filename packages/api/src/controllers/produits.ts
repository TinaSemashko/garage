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

export const getAllModeles =
  (model: Produit) => async (req: Request, res: Response) => {
    const modeles = await model.getModeles();

    if (!modeles) {
      return res.status(404).send({ message: "No modeles" });
    }

    res.send({ results: [modeles] });
  };

export const getAllMarques =
  (model: Produit) => async (req: Request, res: Response) => {
    const marques = await model.getMarques();

    if (!marques) {
      return res.status(404).send({ message: "No marques" });
    }

    res.send({ results: [marques] });
  };

export const createNewProduit =
  (model: Produit) => async (req: Request, res: Response) => {
    const data = req.body;

    const produitId = await model.createProduit(data as any);

    if (!produitId) {
      return res.status(404).send({ message: "Something went wrong..." });
    }

    res.send({ results: [produitId] });
  };

export const updateProduitById =
  (model: Produit) => async (req: Request, res: Response) => {
    const { id, data } = req.body;

    const produitId = await model.putProduitById(id as string, data as any);

    if (!produitId) {
      return res.status(400).send({ message: "Produit doesn't modified" });
    }

    res.send({ results: [produitId] });
  };

export const removeProduit =
  (model: Produit) => async (req: Request, res: Response) => {
    const { id } = req.body;

    const produitId = await model.removeProduitById(id as string);

    if (!produitId) {
      return res
        .status(400)
        .send({ message: "Produit has not been deleted..." });
    }

    res.send({ results: [produitId] });
  };

export const getAllProduits =
  (model: Produit) => async (req: Request, res: Response) => {
    const user = await model.getProduits();

    if (!user) {
      return res.status(404).send({ message: "No produits" });
    }

    res.send({ results: [user] });
  };

export const createNewAvis =
  (model: Produit) => async (req: Request, res: Response) => {
    const data = req.body.data;

    const avisId = await model.createAvis(data as any);

    if (!avisId) {
      return res.status(404).send({ message: "Something went wrong..." });
    }

    res.send({ results: [avisId] });
  };

export const getAllAvisById =
  (model: Produit) => async (req: Request, res: Response) => {
    const { id } = req.params;

    const avis = await model.getAvisById(id as string);

    if (!avis) {
      return res.status(404).send({ message: "No avis" });
    }

    res.send({ results: [avis] });
  };
