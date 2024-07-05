import { Request, Response } from "npm:express@4.19.2";
import { LibroModel } from "../db/Libro.ts";
import mongoose from "npm:mongoose@8.4.4";

const ObjectId = mongoose.mongo.ObjectId; //CUIDADO CON ESTO

export const addLibro = async (req: Request, res: Response) => {

    try {

        const { titulo, autor, anio  } = req.body;
        const librito = await LibroModel.create({ titulo, autor: new ObjectId(autor), anio});

        res.status(201).json(librito);

    } catch (error) {
        res.status(500).send(error.message);
        return;
    }
};