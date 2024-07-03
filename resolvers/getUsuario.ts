import { Request, Response } from "npm:express@4.19.2";
import { UsuarioModel } from "../db/Usuario.ts";
import { ColeccionModel } from "../db/Coleccion.ts";

export const getUsuario = async (req: Request, res: Response) => {

    try {

        const { id } = req.params;
        const user = await UsuarioModel.findOne({ _id: id }).exec();

        if (!user) {
            res.status(404).send("Usuario no encontrado");
            return;
        }

        const colecciones = await ColeccionModel.find({ _id: { $in: user.colecciones } });
/*         const colecciones = await Promise.all(c.map(async (coleccion) => {
            const comics = await ComicModel.find({ _id: { $in: coleccion.comics } });
            return {
                name: coleccion.name,
                comics
            }
        })) */

        res.status(200).json({
            name: user.name,
            email: user.email,
            colecciones
        });

    } catch (error) {
        console.log(error)
        res.status(500).send(`Error al obtener el Usuario: ${error.message}`);
    }
};