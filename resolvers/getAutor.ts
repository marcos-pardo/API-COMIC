import { Request, Response } from "npm:express@4.19.2";
import { AutorModel } from "../db/Autor.ts";

export const getAutor = async (req: Request, res: Response) => {
   
    try {
       
        const { id } = req.params;
        const auth = await AutorModel.findOne({ _id: id }).exec();

        if (!auth) {
            res.status(404).send("Autor no encontrada");
            return;
        }

        res.status(200).json(auth);

    } catch (error) {
        res.status(500).send(`Error al obtener el autor: ${error.message}`);
    }
};
 