import mongoose from "npm:mongoose@8.4.4";
import { Libro } from "../types.ts";

const Schema = mongoose.Schema;

const LibroSchema = new Schema({

    titulo: { type: String, required: true },
    anio: { type: Number, required: true },
    autor: { type: Schema.Types.ObjectId, ref: 'Autor'  },
    editorial: { type: Schema.Types.ObjectId, ref: 'Editorial' }
});


export type LibroModelType = mongoose.Document & Omit<Libro, "id">;
export const LibroModel = mongoose.model<LibroModelType>("Libro", LibroSchema);