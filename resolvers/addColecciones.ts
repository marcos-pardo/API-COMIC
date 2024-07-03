import { Request, Response } from "npm:express@4.19.2";
import { ColeccionModel } from "../db/Coleccion.ts";
import mongoose from "npm:mongoose@8.4.4";

const ObjectId = mongoose.Types.ObjectId;

export const addColeccion = async (req: Request, res: Response) => {

    try {

        const { name, comics } = req.body;
        const coleccion = await ColeccionModel.create({ name, comics: comics.map(comic => new ObjectId(comic))});

        res.status(201).json(coleccion);

    } catch (error) {
        res.status(500).send(error.message);
        return;
    }
};
/*
{
    "name": "HEROES Y VILLANOS",
    "comics": ["659804e9761f3031124cc5ce"]
}
*/