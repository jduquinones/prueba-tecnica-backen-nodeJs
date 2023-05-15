import * as modelUsuario from "../models/usuario.models.js";
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


export async function crearCuenta(req,res) {
   
  try {
    const conexion = await establecerConexion();

    const {clave, usuario, correo} = req.body;

    const user = {
      clave: clave,
      usuario: usuario,
      correo: correo
    }

    const result = await modelUsuario.crearCuenta(conexion, user);

    if (result.affectedRows > 0) {
      res.status(200).json({
        ok:'Usuario registrado.'
      });
    } else {
      res.status(400).json({
        error: 'No se pudo realizar el registro.'
      });
    }

  } catch (error) {   

    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({ error: 'El correo proporcionado ya está registrado' });
    }
    
    res.status(500).json({
      error: 'Error en el servidor.'
    });
  }
}

export async function loginCuenta(req, res) {
  try {
    const conexion = await establecerConexion();

    const {clave, correo} = req.body;

    const user = {
      clave: clave,
      correo: correo
    }

    const result = await modelUsuario.loginCuenta(conexion, user, res); 

    if (result) {  

      res.status(200).json({
        ok:'Usuario logueado.'
      });
    } else {
      res.status(400).json({
        error: 'Usuario o contraseña incorrecta.'
      });
    }      

  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: 'Error en el servidor.'
    });
  }
}


