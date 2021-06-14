const jwt = require('jsonwebtoken');

// validar JWT

const validateJwt = (req, res, next) => {

    const token = req.header('Authorization'),
        secret= "nuevaclave"

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


module.exports= {

    validateJwt
}