const {check} = require('express-validator');

//validaciones para usuario

const checkName = check('name', ' el nombre es un dato obligatorio').not().isEmpty();
const checkLastName = check('lastName', ' el apellido es un dato obligatorio').not().isEmpty();
const checkEmail = check('email', ' el email es un dato obligatorio').isEmail() .not().isEmpty() ;
const checkPassword = check('password', ' la contraseña debe tener minimo 6 caracter').not().isEmpty() .isLength({min:6});

module.exports = {
    checkName,
    checkLastName,
    checkEmail,
    checkPassword,                  
};
