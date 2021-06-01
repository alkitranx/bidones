// Global packages
const express = require('express'),
    app = express(),
    {validationResult, body} = require('express-validator');

// Locar resources    
const {movementRepository} = require('../repositories/index'),
    {checkUbication, checkMovement, checkProtocol, checkQuantity, checkProduct, checkMeasure} = require('../validations/movementValidations');



app.get('/movements', async (req, res) => {
    movementRepository.findAll()
    .then(allMovements => res.json(allMovements))
    .catch(error => res.status(400).json(error))
});

app.post('/movements', [checkMeasure, checkProduct, checkProtocol, checkQuantity, checkUbication, checkMovement], (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    };
   
    const body = req.body;

        movementRepository.create({
            productId : body.product,
            protocol : body.protocol,
            quantity: body.quantity,
            measure: body.measure,
            userId: body.user,
            warehouseId: body.warehouse,
            type: body.type})
            .then(movement => res.json(movement))
            .catch(error => res.status(400).json(error))

});

app.put('/movements/:id', [checkMeasure, checkProduct, checkProtocol, checkQuantity, checkUbication, checkMovement] ,async (req, res) => {

    const id = req.params.id;
    const body = req.body;

        movementRepository.update({ 
            productId : body.product,
            protocol : body.protocol,
            quantity: body.quantity,
            measure: body.measure,
            userId: body.user,
            warehouseId: body.warehouse,
            type: body.type}, 
            {where: {id: id}})
            .then(movementUpdate => res.json(movementUpdate))
            .catch(error => res.status(400).json(error))



});



app.delete('/movements/:id', (req, res) => {

    const id = req.params.id,
        body = req.body;

        movementRepository.update(
            {status: body.status
            },{where: {id: id}})
            .then(deleteMovement => res.json(deleteMovement))
            .catch(error => res.json(error))
});

module.exports = app;