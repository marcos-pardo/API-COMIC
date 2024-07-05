import { Request, Response } from "npm:express@4.19.2";
import { AutorModel } from "../db/Autor.ts";
import { LibroModel } from "../db/Libro.ts";

export const getLibros = async (_req: Request, res: Response) => {

    try {

        const libros = await LibroModel.find().exec();

        if (!libros.length) {
            res.status(404).send("No hay Libros");
            return;
        }
        const response = await Promise.all(libros.map(async (librito) => {
        const a = await AutorModel.find({ _id: { $in: librito.autor } });
        const autores = await Promise.all(a.map(async (autor) => {
            return {
                nombreApellido: autor.nombreApellido,
                lengua: autor.lengua
            }
        }))
            return {
            titulo: librito.titulo,
            anio: librito.anio,
            autores
            }
        }
        ));

    res.status(200).send(response);
    
} catch (error) {
    res.status(500).send(`Error al obtener los usuarios: ${error.message}`);
    return;
}
};