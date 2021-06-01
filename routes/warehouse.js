// Global packages

const express = require('express'),
    app = express(),
    {validationResult} = require('express-validator'); 


// local resources    
const {warehouseRepository} = require('../repositories/index'),
    { checkWarehouse } = require('../validations/warehouseValidations');


app.get('/warehouse',  (req, res) => {
    warehouseRepository.findAll()
        .then(warehouseEntities => res.json(warehouseEntities))
        .catch(error => res.status(400).json(error))
});

app.post('/warehouse',[checkWarehouse], (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    };
    
    const body=  req.body;
    
    warehouseRepository.create({
        name: body.name
    }).then(ubication => {
        res.json(ubication)
    }).catch(error=>{
        res.json(error)
    });
    

});

app.put('/warehouse/:id', [checkWarehouse] ,async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    };

    const id = req.params.id;
    const body = req.body


    warehouseRepository.update(
        {name: body.name
        },{where: {id}})
        .then(warehouseChange => res.json(warehouseChange))
        .catch(error=>  res.status(400).json(error))  
});

app.delete('/warehouse/:id', (req, res) => {

    const id = req.params.id;
    const body= req.body;

        warehouseModel.update({
            status: body.status
            },{where: {id}})
            .then(nameDelete => res.json(nameDelete))
            .catch(error => res.status(400).json(error));  
});

module.exports = app