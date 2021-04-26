const express = require('express');
const app = express();0 
const {movement, product} = require('../BD/config');
const {checkUbication, checkMovement, checkProtocole, checkQuantity, checkProduct, checkMeasure} = require('../validations/validator')
const {check, validationResult, body} = require('express-validator');


app.get('/movements', async (req, res) => {

const movements =   await movement.findAll().then(allMovements => {res.json(allMovements)})
    

});

app.post('/movements', [checkMeasure, checkProduct, checkProtocole, checkQuantity, checkUbication, checkMovement], async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    };
   
    const body = req.body;
  
   /*  const idProduct = await product.findAll({attributes: ['idProduct'],where: {codProduct: body.product } })
    .then(idpro => { movement.create({
        productId: idpro[0].idProduct,
        protocole : body.protocole,
        Quantity: body.quantity,
        Measure: body.measure,
        userId: body.user,
        warehouseId: body.warehouse,
        tipeMovement: body.tipemovement})})
    .then(movement => {res.json('movimiento registrado')})
    .catch(err=> { res.json(err)})*/

    const egresoMovement = -body.quantity
       
     if(body.tipemovement === 'EGRESO'){
        movement.create({
            productId : body.product,
            protocole : body.protocole,
            Quantity: egresoMovement,
            Measure: body.measure,
            userId: body.user,
            warehouseId: body.warehouse,
            tipeMovement: body.tipemovement}).then(movement => {res.json(movement)})
            .catch(error => {
                res.json(error)
            })


    }
    if(body.tipemovement === 'INGRESO'){
        movement.create({
            productId : body.product,
            protocole : body.protocole,
            Quantity: body.quantity,
            Measure: body.measure,
            userId: body.user,
            warehouseId: body.warehouse,
            tipeMovement: body.tipemovement}).then(movement => {res.json(movement)})
            .catch(error => {
                res.json(error)
            })


    }
    

    
    
});

app.put('/movements/:id', [checkMeasure, checkProduct, checkProtocole, checkQuantity, checkUbication, checkMovement] ,async (req, res) => {

    const id = req.params.id;
    const body = req.body;

    await movement.update({ 
        productId : body.product,
        protocole : body.protocole,
        Quantity: body.quantity,
        Measure: body.measure,
        userId: body.user,
        warehouseId: body.warehouse,
        tipeMovement: body.tipemovement}, 
        {where: {id: id}}).then(updateMovement => res.json(updateMovement))
        .catch(error => res.json(error))



})



app.delete('/movements/:id', async (req, res) => {

    const id = req.params.id

    await movement.destroy({where: {id: id}})
        .then(deleteMovement => res.json(deleteMovement))
        .catch(error => res.json(error))

})







module.exports = app;