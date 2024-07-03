import mongoose from "npm:mongoose@8.4.4";
import { Usuario } from "../types.ts";

const Schema = mongoose.Schema;

const ComicSchema = new Schema({
        
    titulo: { type: String, requiered: true },
    descripcion: { type: String, requiered: true },
    formato: { type: String, requiered: true },
});

export type ComicModelType = mongoose.Document & Omit<Usuario, "id">;
export const ComicModel = mongoose.model<ComicModelType>("Comic", ComicSchema);

