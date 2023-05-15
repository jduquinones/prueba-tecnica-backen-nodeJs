import express  from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import routerUser from "./routes/usuario.router.js";
import routerTareas from "./routes/tareas.router.js";

const app = express()
dotenv.config();



app.use(express.json());
app.use(cookieParser());

app.use(routerUser);
app.use(routerTareas);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})
