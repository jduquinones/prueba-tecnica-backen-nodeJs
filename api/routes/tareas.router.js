import * as ctrTareas from "../controllers/tareas.controller.js";
import * as mdwTareas from "../middleware/tareas.middleware.js";
import * as auth from "../middleware/jwt.middlewaer.js";
import { Router } from "express";

const routerTareas = Router ();

routerTareas.post("/crear-tarea", auth.validarToken, mdwTareas.validarCrearTarea, ctrTareas.crearTarea);
routerTareas.get("/listar-tarea", auth.validarToken, ctrTareas.leerTarea);
routerTareas.get("/listar-tarea-id/:id", auth.validarToken, mdwTareas.vaildarListartareaPorId, ctrTareas.leerTareaPorId);
routerTareas.delete("/eliminar-tarea", auth.validarToken, mdwTareas.validarEliminarTarea, ctrTareas.eliminarTarea);

routerTareas.get("/listar-tarea-id/", (req, res) => {
    res.status(400).json({ error: 'El ID es requerido' });
});
  

export default routerTareas;