const {check} = require('express-validator');

//validaciones para tabla movements
const checkProduct = check('product', ' el codigo de producto es un dato obligatorio').not().isEmpty();
const checkProtocol = check('protocol', ' el campo protocolo no puede estar vacio').not().isEmpty();
const checkQuantity = check('quantity', ' la cantidad no debe estar vacia').not().isEmpty();
const checkUbication = check('warehouse', ' el campo ubicacion es obligatorio').not().isEmpty();
const checkMovement = check('type', ' el tipo de movimiento es obligatorio').not().isEmpty();
const checkMeasure = check('measure', ' el campo medida no puede estar vacio').not().isEmpty();

module.exports = {
    checkProduct,
    checkProtocol,
    checkQuantity,
    checkUbication,
    checkMovement,
    checkMeasure                    
};
