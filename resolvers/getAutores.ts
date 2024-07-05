import { Request, Response } from "npm:express@4.19.2";
import { AutorModel } from "../db/Autor.ts";

export const getAutores = async (req: Request, res: Response) => {
   
    try {
        const auth = await AutorModel.find().exec();

        if (!auth) {
            res.status(404).send("Autor no encontrada");
            return;
        }

        res.status(200).json(auth);

    } catch (error) {
        res.status(500).send(`Error al obtener el autor: ${error.message}`);
    }
};
 