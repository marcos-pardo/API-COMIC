import { Request, Response } from "npm:express@4.19.2";
import { ComicModel } from "../db/Comic.ts";

export const getComic = async (req: Request, res: Response) => {
   
    try {
       
        const { id } = req.params;
        const comic = await ComicModel.findOne({ _id: id }).exec();

        if (!comic) {
            res.status(404).send("Comic no encontrada");
            return;
        }

        res.status(200).json(comic);

    } catch (error) {
        res.status(500).send(`Error al obtener el Comic: ${error.message}`);
    }
};
 