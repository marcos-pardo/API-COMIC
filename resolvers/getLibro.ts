import { Request, Response } from "npm:express@4.19.2";
import { AutorModel } from "../db/Autor.ts";
import { LibroModel } from "../db/Libro.ts";

export const getLibro = async (req: Request, res: Response) => {

    try {

        const { id } = req.params;
        const librito = await LibroModel.findOne({ _id: id }).exec();

        if (!librito) {
            res.status(404).send("Libro no encontrado");
            return;
        }

        const autoress = await AutorModel.find({ _id: { $in: librito.autor } });
        
        res.status(200).json({
            titulo: librito.titulo,
            anio: librito.anio,
            autoress,
        });

    } catch (error) {
        console.log(error)
        res.status(500).send(`Error al obtener el Libro: ${error.message}`);
    }
};