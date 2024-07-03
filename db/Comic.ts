import mongoose from "npm:mongoose@8.4.4";
import { Usuario } from "../types.ts";

const Schema = mongoose.Schema;

const ComicSchema = new Schema({
        
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    formato: { type: String, required: true },
});

export type ComicModelType = mongoose.Document & Omit<Usuario, "id">;
export const ComicModel = mongoose.model<ComicModelType>("Comic", ComicSchema);

