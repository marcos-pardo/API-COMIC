import { Request, Response } from "npm:express@4.18.2";
import { AutorModel } from "../db/Autor.ts";
export const deleteAutor = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const autor = await AutorModel.findOneAndDelete({ _id: id }).exec();
        if (!autor) {
            res.status(404).send("Autor no encontrada");
            return;
        }
        res.status(200).send("Autor eliminada");
    } catch (error) {
        res.status(404).send(error.message);
        return;
    }
};
