import { Request, Response } from "npm:express@4.18.2";
import { AutorModel, AutorModelType } from "../db/Autor.ts";
export const putAutor = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { nombreApellido, lengua } =
            req.body;
        const updateAutor = await AutorModel.findOneAndUpdate({ _id: id }, {
            nombreApellido,
            lengua,
        }, { new: true }).exec();
        if (!updateAutor) {
            res.status(404).send("Autor no encontrada");
            return;
        }
        res.status(200).send({
            id: updateAutor._id,
            nombreApellido: updateAutor.nombreApellido,
            lengua: updateAutor.lengua,
        });
    } catch (error) {
        res.status(500).send(error.message);
        return;
    }
};
