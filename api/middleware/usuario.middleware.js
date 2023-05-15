
import bcrypt from "bcrypt";


const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const saltRounds = 10;

export async function crearCuenta(req, res, next) {

   try {
        const {correo, clave, confirmaClave, usuario} = req.body;    

        let esCorreoValido  = patron.test(correo);    

        if (clave != confirmaClave) {  
            return res.status(400).json({error: "las contraseñas ingresadas no coinciden"});        
        }

        if (!correo || !esCorreoValido) {
            return res.status(400).json({error: "Debe de ingresar un correo valido"});    
        }

        if (!usuario) {
            return res.status(400).json({error: "Debe de ingresar un usuario"});
        }

        const hashed  = await bcrypt.hash(clave, saltRounds);
        req.body.clave = hashed;  

        next();   

   } catch (error) {
    console.log(error);
    res.status(400).json({error: error});
   }    
}

