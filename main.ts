import express from "npm:express@4.19.2";
import mongoose from "npm:mongoose@8.4.4";
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
import { addAutor } from "./resolvers/addAutor.ts";
import { addLibro } from "./resolvers/addLibro.ts";
import { getAutor } from "./resolvers/getAutor.ts";
import { getLibro } from "./resolvers/getLibro.ts";
import { getAutores } from "./resolvers/getAutores.ts";
import { getLibros } from "./resolvers/getLibros.ts";
import { putAutor } from "./resolvers/putAutor.ts";
import { putLibro } from "./resolvers/putLibro.ts";
import { deleteAutor } from "./resolvers/deleteAutor.ts";
import { deleteLibro } from "./resolvers/deleteLibro.ts";



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


  app.post("/addAutor", addAutor);
  app.post("/addLibro", addLibro);
  app.get("/getAutor/:id", getAutor);
  app.get("/getLibro/:id", getLibro);
  app.get("/getAutores", getAutores);
  app.get("/getLibros", getLibros);
  app.put("/putAutor/:id", putAutor);
  app.put("/putLibro/:id", putLibro);
  app.delete("/deleteAutor/:id", deleteAutor);
  app.delete("/deleteLibro/:id", deleteLibro);


  app.listen(3000, () => {
    console.log("🎮🔫 Server listening on port 3000 🎮🔫");
  });
  
} catch (error) {
  console.log(error);
}
