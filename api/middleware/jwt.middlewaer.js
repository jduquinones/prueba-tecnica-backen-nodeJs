
import jwt from "jsonwebtoken";

export const createTokens = (usuario) => {
    const accessToken = jwt.sign(
        {nombreUsuario: usuario.usuario, id: usuario.id}, 
        process.env.SECRET
    );
    return accessToken;
}

export const validarToken = (req, res, next) => {
    const accessToken = req.cookies['access-token'];

    if (!accessToken)  return res.status(400).json({error: "Usuario no autenticado"});

    try {
        const tokenValido = jwt.verify(accessToken, process.env.SECRET);       
        if (tokenValido) {
            req.authenticated = true;
            return next();
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({error: "token invalido"});
    }
}

export function logout(req, res) {

    const cookie = req.headers.cookie;
    const accessToken = cookie.split('access-token=')[1]; 
  
    const expiredToken = jwt.verify(accessToken, process.env.SECRET); 
    expiredToken.exp = Math.floor(Date.now() / 1000) - 10; 
    
    const newToken = jwt.sign(expiredToken, process.env.SECRET);
    
    res.setHeader('Set-Cookie', `access-token=${newToken}; HttpOnly`);  
    res.status(200).json({logout: "logout"});
  
  }
