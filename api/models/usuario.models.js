import bcrypt from "bcrypt";
import * as auth from "../middleware/jwt.middlewaer.js";


export function crearCuenta(conexion, usuario) {
   try {
        let insertQuery = `INSERT INTO usuarios (clave, usuario, correo) VALUES ('${usuario.clave}', '${usuario.usuario}', '${usuario.correo}')`;

        return new Promise((resolve, reject) => {
            conexion.query(insertQuery, function(err, result) {
                if (err) {                   
                    reject(err);
                };                
                resolve(result);
            });
        });      

   } catch (error) {  
    console.log(error);
   }  
}


export async function loginCuenta(conexion, user, res) {
    try {
      let insertQuery = `SELECT * FROM usuarios WHERE correo = '${user.correo}'`;
  
      return new Promise((resolve, reject) => {
        conexion.query(insertQuery, function (err, result) {
          if (err) {            
            reject(err);
          }
  
          if (result == '' ) {
            return resolve(false);
          }
  
          const dbClave = result[0].clave;
  
          bcrypt.compare(user.clave, dbClave).then((match) => {
            if (!match) {
                resolve(match);
            } else {
                const accessToken = auth.createTokens(result);

                res.cookie("access-token", accessToken, {
                    maxAge: 60*60*24*30*1000
                });

                resolve(match);
            }
          });
        });

      });
  
    } catch (error) {
      console.log(error);
      throw new Error('No se pudo realizar el login');
    }
  }