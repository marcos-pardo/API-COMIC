import mongoose from "npm:mongoose@8.4.4";
import { Autor } from "../types.ts";

const Schema = mongoose.Schema;

const AutorSchema = new Schema({
        
    nombreApellido: { type: String, required: true },
    lengua: { type: String, required: true },
});

export type AutorModelType = mongoose.Document & Omit<Autor, "id">;
AutorSchema.post("findOneAndDelete", async function (doc: AutorModelType) {
    if (doc) {
        await mongoose.models.Libro.deleteMany({ autor: doc._id }); 
    }
}
);


export const AutorModel = mongoose.model<AutorModelType>("Autor", AutorSchema);

