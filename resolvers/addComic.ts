import { Request, Response } from "npm:express@4.19.2";
import { ComicModel } from "../db/Comic.ts";

export const addComic = async (req: Request, res: Response) => {
    
    try {
        
        const { titulo, descripcion, formato } = req.body;

        const comic = await ComicModel.create({ titulo, descripcion, formato});

        res.status(201).json(comic);
        
    } catch (error) {
        res.status(500).send(error.message);
        return;
    }
};
/*
{
    "titulo": "Capitan America",
    "descripcion": "Heroes",
    "formato": "Comic"
}
*/