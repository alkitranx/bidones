const {check} = require('express-validator');

// validaciones para products//
const checkType = check('type', ' el tipo de producto es obligatorio y debe contar con 2 caracteres').not() .isEmpty() .isLength({min: 2, max: 2})
const checkCode = check('code', 'el codigo es un campo obligatorio').not() .isEmpty()
const checkDescription = check('description', 'la descripcion no puede estar vacia').not() .isEmpty()

module.exports = {
    checkType,
    checkCode,
    checkDescription                
};