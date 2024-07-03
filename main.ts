import express from "npm:express@4.18.2";
import mongoose from "npm:mongoose@7.6.3";
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
import { Usuario } from "./types.ts";
import { Comic } from "./types.ts";
import { Coleccion } from "./types.ts";
import { UsuarioModel, UsuarioModelType } from "./db/Usuario.ts";
import { ColeccionModel, ColeccionModelType } from "./db/Coleccion.ts";
import { ComicModel, ComicModelType } from "./db/Comic.ts";
import { addUsuario } from "./resolvers/addUsuario.ts";
import { addColeccion } from "./resolvers/addColecciones.ts";
import { addComic } from "./resolvers/addComic.ts";
import { getUsuario } from "./resolvers/getUsuario.ts";
import { getUsuarioTodos } from "./resolvers/getUsuariosTodos.ts";
import { getColeccion } from "./resolvers/getColecciones.ts";
import { getComic } from "./resolvers/getComic.ts";


const env = await load();

try {

  const MONGO_URL = env.MONGO_URL || Deno.env.get("MONGO_URL");

  if (!MONGO_URL) {
    console.log("No se ha encontrado la variable de entorno MONGO_URL");
    Deno.exit(1);
  }

  await mongoose.connect(MONGO_URL);
  console.log("Conectado a MongoDB");

  const app = express();
  app.use(express.json());


  app.post("/addUsuario", addUsuario);
  app.post("/addComic", addComic);
  app.post("/addColeccion", addColeccion);
  app.get("/getComic/:id", getComic);
  app.get("/getUsuario/:id", getUsuario);
  app.get("/getUsuarioTodos", getUsuarioTodos);
  app.get("/getColeccion/:id", getColeccion);


  app.listen(3000, () => {
    console.log("🎮🔫 Server listening on port 3000 🎮🔫");
  });
  
} catch (error) {
  console.log(error);
}
