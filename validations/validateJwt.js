const jwt = require('jsonwebtoken');

// validar JWT

const validateJwt = (req, res, next) => {

    const token = req.header('Authorization'),
        secret = process.env.SECRET_KEY;

    if(!token) {
        return res.status(401).json({msg: 'no hay token'});
    }

    try {
        jwt.verify(token, secret);

        next()
        
    } catch (error) {
        console.log(error);
        res.status(401).json({msg:'token no valido'})
    }
}

const validateAdminJWT = (req, res, next) => {

    const token = req.header('Authorization'),
        secret = process.env.SECRET_KEY;

    if(!token) {
        return res.status(401).json({msg: 'no hay token'});
    }

    try {
        jwt.verify(token, secret, (error, data) => {

            if(error){
                return res.status(401).json({msg: 'el token no es valido'})
            }
            else if(data.role !== 'admin'){
                return res.status(401).json({msg:'usuario no autorizado'})
            }else{
                next()
            }
        });

               
    } catch (error) {
        console.log(error);
        res.status(401).json({msg:'token no valido'})
    }
}

module.exports= {
    validateJwt,
    validateAdminJWT
}