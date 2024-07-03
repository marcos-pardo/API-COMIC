import mongoose from "npm:mongoose@8.4.4";
import { Usuario } from "../types.ts";

const Schema = mongoose.Schema;

const ColeccionSchema = new Schema({
    
    name: { type: String, required: true },
    comics: [{ type: Schema.Types.ObjectId, ref: 'Comic' }]
});

export type ColeccionModelType = mongoose.Document & Omit<Usuario, "id">;
export const ColeccionModel = mongoose.model<ColeccionModelType>("Coleccion", ColeccionSchema);