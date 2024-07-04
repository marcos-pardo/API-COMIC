import mongoose from "npm:mongoose@8.4.4";
import { Usuario } from "../types.ts";

const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({

    name: { type: String, required: true },
    email: { type: String, required: true },
    colecciones: [{ type: Schema.Types.ObjectId, ref: 'Coleccion' }]
});

//VALIDAR COLECCIONES 
UsuarioSchema.path("colecciones").validate(
    async (col: mongoose.Types.ObjectId[]) => {
      try {
        const colecc = await UsuarioModel.find({_id: { $in: col }}).exec();
            if (colecc.length !== colecc.length) {
                 return false;
            }
      } catch (e) {
        console.error("Error validando colecciones en UsuarioSchema:", e);
        return false;
      }
    }
);

export type UsuarioModelType = mongoose.Document & Omit<Usuario, "id">;
export const UsuarioModel = mongoose.model<UsuarioModelType>("Usuario", UsuarioSchema);