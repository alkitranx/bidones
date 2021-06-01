const {check} = require('express-validator')

//validaciones para warehouse//

const checkWarehouse = check('name', 'el nombre es obligatorio y debe tener 6 caracteres ').not() .isEmpty().isLength({min: 6, max: 10})


module.exports= {
    checkWarehouse
}