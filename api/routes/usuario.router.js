import * as ctrUsuario from "../controllers/usuario.controller.js";
import * as mdwUsuario from "../middleware/usuario.middleware.js";
import * as auth from "../middleware/jwt.middlewaer.js";
import { Router } from "express";

const routerUser = Router ();

routerUser.post("/crear-usuario", mdwUsuario.crearCuenta, ctrUsuario.crearCuenta);
routerUser.post("/login-usuario", ctrUsuario.loginCuenta);
routerUser.get("/logout", auth.logout);

export default routerUser;

