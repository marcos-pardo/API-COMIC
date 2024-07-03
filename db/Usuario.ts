import mongoose from "npm:mongoose@8.4.4";
import { Usuario } from "../types.ts";

const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({

    name: { type: String, requiered: true },
    email: { type: String, requiered: true },
    colecciones: [{ type: Schema.Types.ObjectId, ref: 'Coleccion' }]
});


//ASI SERIA ?¿


//VALIDAR COLECCIONES 
UsuarioSchema.path("colecciones").validate(
    async (coleccion: mongoose.Types.ObjectId[]) => {
      try {
        const colecc = await UsuarioModel.find({_id: { $in: colecciones }}).exec();
            if (colecc.length !== colecc.length) {
                 return false;
            }
      } catch (e) {
        return false;
      }
    }
  );

export type UsuarioModelType = mongoose.Document & Omit<Usuario, "id">;
export const UsuarioModel = mongoose.model<UsuarioModelType>("Usuario", UsuarioSchema);