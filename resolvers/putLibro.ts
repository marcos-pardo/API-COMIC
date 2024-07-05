import { Request, Response } from "npm:express@4.18.2";
import { AutorModel, AutorModelType } from "../db/Autor.ts";
import { LibroModel,LibroModelType } from "../db/Libro.ts";
export const putLibro = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { titulo,anio,autor } =
            req.body;
        const updateLibro = await LibroModel.findOneAndUpdate({ _id: id }, {
            titulo,
            anio,
            autor,
        }, { new: true }).exec();
        if (!updateLibro) {
            res.status(404).send("Autor no encontrada");
            return;
        }
        res.status(200).send({
            id: updateLibro._id,
            titulo: updateLibro.titulo,
            anio: updateLibro.anio,
            autor: updateLibro.autor,
        });
    } catch (error) {
        res.status(500).send(error.message);
        return;
    }
};