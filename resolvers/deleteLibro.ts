import { Request, Response } from "npm:express@4.18.2";
import { LibroModel } from "../db/Libro.ts";
export const deleteLibro = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const autor = await LibroModel.findOneAndDelete({ _id: id }).exec();
        if (!autor) {
            res.status(404).send("Libro no encontrado");
            return;
        }
        res.status(200).send("Libro eliminado");
    } catch (error) {
        res.status(404).send(error.message);
        return;
    }
};