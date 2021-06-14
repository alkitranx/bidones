const {check} = require('express-validator');


//validaciones para login de usuario

const checkEmail = check('email', ' el email es un dato obligatorio').isEmail() .not().isEmpty() ;
const checkPassword = check('password', ' la contraseña debe tener minimo 6 caracter').not().isEmpty();




module.exports= {
    checkEmail,
    checkPassword,
}