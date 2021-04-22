const express = require ('express');
const app = express();
const {check, validationResult, body} = require('express-validator');
const { QueryTypes} = require('sequelize');
const {user, sequelize} = require('../BD/config');

// validaciones para products//
const checkTipe = check('tipo', ' el tipo de producto es obligatorio y debe contar con 2 caracteres').not() .isEmpty() .isLength({min: 2, max: 2})
const checkCode = check('codigo', 'el codigo es un campo obligatorio').not() .isEmpty()
const checkDescription = check('descripcion', 'la descripcion no puede estar vacia').not() .isEmpty()

//validaciones para warehouse//

const checkWarehouse = check('name', 'el nombre es obligatorio y debe tener 6 caracteres ').not() .isEmpty().isLength({min: 6, max: 10})

//validaciones para usuario

const checkName = check('name', ' el nombre es un dato obligatorio').not().isEmpty();
const checkSurname = check('surname', ' el apellido es un dato obligatorio').not().isEmpty();
const checkEmail = check('email', ' el email es un dato obligatorio').isEmail() .not().isEmpty() ;
const checkPassword = check('password', ' la contraseña debe tener minimo 6 caracter').not().isEmpty() .isLength({min:6});


//validaciones para tabla movements
const checkProduct = check('product', ' el codigo de producto es un dato obligatorio').not().isEmpty();
const checkProtocole = check('protocole', ' el campo protocolo no puede estar vacio').not().isEmpty();
const checkQuantity = check('quantity', ' la cantidad no debe estar vacia').not().isEmpty();
const checkUbication = check('warehouse', ' el campo ubicacion es obligatorio').not().isEmpty();
const checkMovement = check('tipemovement', ' el tipo de movimiento es obligatorio').not().isEmpty();
const checkMeasure = check('measure', ' el campo medida no puede estar vacio').not().isEmpty();






//validacion
/*const checkUnique = (req, res, next) => {

    let email =  req.body.email;   
    const allUsers = sequelize.query( `SELECT email FROM users where email = "hender6"`, { type: QueryTypes.SELECT });
;

if(email === "hender5") {
    return res.json({
      ok: false,
      err: {
          message: 'este email ya esta en uso'
      }
  })} else{
      return res.json(allUsers)
  }

 
  next()





}*/




module.exports = {
    checkTipe,
    checkCode,
    checkDescription,
    checkWarehouse,
    checkName,
    checkSurname,
    checkEmail,
    checkPassword,
    checkProduct,
    checkProtocole,
    checkQuantity,
    checkUbication,
    checkMovement,
    checkMeasure                    
};

