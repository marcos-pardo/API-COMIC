import { Request, Response } from "npm:express@4.19.2";
import { ColeccionModel } from "../db/Coleccion.ts";

export const getColeccion = async (req: Request, res: Response) => {
    
    try {
       
        const { id } = req.params;
        const colecc = await ColeccionModel.findOne({ _id: id }).exec();

        if (!colecc) {
            res.status(404).send("Coleccion no encontrada");
            return;
        }

        res.status(200).json(colecc);

    } catch (error) {
        res.status(500).send(`Error al obtener las colecciones: ${error.message}`);
    }
};
 