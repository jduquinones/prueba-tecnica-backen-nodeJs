
import * as modelTareas from "../models/tareas.models.js";
import mysql from "mysql";

async function establecerConexion() {
    try {
      const conexion = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
      });
  
      await new Promise((resolve, reject) => {
        conexion.connect((err) => {
          if (err) {
            reject(err);
          } else {
            console.log("Conectado a la base de datos con el id " + conexion.threadId);
            resolve();
          }
        });
      });
  
      return conexion;
    } catch (error) {
      console.log(error);
    }
  }

export async function crearTarea(req, res) {

    try {
        const conexion = await establecerConexion();

        const {id,titulo, descripcion, completado, fechaLimite, prioridad, asignadoA} = req.body;
        console.log(req.body);

        if (!id) {
            console.log(req.body);
    
            const tarea = {
            titulo: titulo,
            descripcion: descripcion,
            completado: completado,
            fechaLimite: fechaLimite,
            prioridad: prioridad,
            asignadoA: asignadoA
            };

            const result = await modelTareas.crearTarea(conexion, tarea);

            res.json(result);
            console.log(result);                     

        }else {
            console.log(req.body);

            const tarea = {
                id: id,
                titulo: titulo,
                descripcion: descripcion,
                completado: completado,
                fechaLimite: fechaLimite,
                prioridad: prioridad,
                asignadoA: asignadoA
            };

            const result = await modelTareas.actualizarTarea(conexion, tarea);

            console.log(result);

            if (result > 0) {
                return res.status(200).json({ok: "Usuario actualizado."})
            }
            res.status(400).json({error: "No se pudo actualizar el usuario."})            
            console.log(result);
        }
           
    } catch (error) {
        console.log(error);
    }
}

export async function leerTarea(req, res) {

    try {
        const conexion = await establecerConexion();

        const result = await modelTareas.leerTarea(conexion);

        res.json(result);
        console.log(result);            
           
    } catch (error) {
        console.log(error);
    }
}

export async function leerTareaPorId(req, res) {

    try {
        const conexion = await establecerConexion();

        const id = req.params.id;

        const result = await modelTareas.leerTareaPorId(conexion, id);

        res.json(result);
        console.log(result);
           
    } catch (error) {
        console.log(error);
    }
}

export async function eliminarTarea(req, res) {

    try {
        const conexion = await establecerConexion();

        const id = req.body.id;
        console.log(id);

        const result = await modelTareas.eliminarTarea(conexion, id);

        if (result > 0) {
            return res.status(200).json({ok: "Usuario eliminado."})
        }
        res.status(200).json({error: "No se pudo eliminar el usuario."}) 
        console.log(result);
           
    } catch (error) {
        console.log(error);
    }
}