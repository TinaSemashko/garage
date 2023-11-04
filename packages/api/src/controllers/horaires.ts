import { Request, Response } from "express";
import * as userModel from "../models/horaires";

type Horaires = typeof userModel;

export const getHoraires =
  (model: Horaires) => async (req: Request, res: Response) => {
    const heures = await model.getHoraires();

    if (!heures) {
      return res.status(404).send({ message: "No heures" });
    }

    res.send({ results: [heures] });
  };

export const updateHorairesById =
  (model: Horaires) => async (req: Request, res: Response) => {
    const { data } = req.body;
    const dataArray = Array.from(Object.values(data)) as Array<object>;

    const horairesIdArray = await model.putHorairesById(
      dataArray as Array<object>
    );
    // console.log(horairesIdArray);
    if (!horairesIdArray) {
      return res.status(400).send({ message: "Horaires don't modified" });
    }

    res.send({ results: [horairesIdArray] });
  };
