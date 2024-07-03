import { Request, Response } from "npm:express@4.19.2";
import { UsuarioModel } from "../db/Usuario.ts";
import mongoose from "npm:mongoose@8.4.4";

const ObjectId = mongoose.Types.ObjectId;

export const addUsuario = async (req: Request, res: Response) => {
    
  try {

    const { name, email, colecciones } = req.body;
    
    //const user = await UsuarioModel.create({ name, email, colecciones:colecciones.map(colec => new ObjectId(coleccion))});
    const user = await UsuarioModel.create({ name, email, colecciones: colecciones.map(colec => new ObjectId(colec))});

    res.status(201).json(user);
    
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};
/*
{
    "name": "Jorge",
    "email": "jorge@mail.com",
    "colecciones": ["65980a70ef3a66d66a3e9177"]
}
*/

