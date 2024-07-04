import { Request, Response } from "npm:express@4.19.2";
import { UsuarioModel } from "../db/Usuario.ts";
import { ColeccionModel } from "../db/Coleccion.ts";
import { ComicModel } from "../db/Comic.ts";

export const getUsuarioTodos = async (_req: Request, res: Response) => {

    try {

        const users = await UsuarioModel.find().exec();

        if (!users.length) {
            res.status(404).send("No hay usuarios");
            return;
        }
        const response = await Promise.all(users.map(async (user) => {
            const c = await ColeccionModel.find({ _id: { $in: user.colecciones } }); //Busca si el id esta dentro de las colecciones, porque colecciones es un array
        
        const colecciones = await Promise.all(c.map(async (coleccion) => {
            const comics = await ComicModel.find({ _id: { $in: coleccion.comics } });
            return {
                name: coleccion.name,
                comics
            }
        }))
       
        return {
            name: user.name,
            email: user.email,
            colecciones
        }
    }))

    res.status(200).send(response);
    
} catch (error) {
    res.status(500).send(`Error al obtener los usuarios: ${error.message}`);
    return;
}
};

