require('dotenv').config();
const jwt = require('jsonwebtoken');

//Esto no es escalable xdxd mejor hago un middleWARE
function verifyToken(req, res, next){

    const authHeader = req.headers['authorization'];

    if(!authHeader){
        return res.status(401).json({ message: "Token requerido" });
    }

    const token = authHeader.split(" ")[1];

    if(!token){
        return res.status(401).json({ message: "Token inválido" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {

        if(err){
            return res.status(403).json({ message: "Token inválido o expirado" });
        }

        req.user = decoded;
        next();

    });

}

module.exports = { verifyToken };