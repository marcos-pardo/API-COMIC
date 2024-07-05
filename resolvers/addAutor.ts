import { Request, Response } from "npm:express@4.19.2";
import { AutorModel } from "../db/Autor.ts";

export const addAutor = async (req: Request, res: Response) => {
    
    try {
        const { nombreApellido, lengua } = req.body;
        const aut = await AutorModel.create({ nombreApellido, lengua });

        res.status(201).json(aut);
        
    } catch (error) {
        res.status(500).send(error.message);
        return;
    }
};
/*
{
    "nombreApellido": "lorca",
    "lengua": "espan",
    "_id": "6686b18fd3becafdb1ab9e75",
}*/