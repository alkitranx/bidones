const express = require ('express');
const app = express();
const { stock, movement } = require('../BD/config');
const {check, validationResult} = require('express-validator');
const { checkTipe, checkCode, checkDescription } = require('../validations/validator');




// este es el que estoy pegado
app.get('/stock/:id', async (req, res) => {

    const idProduct = req.params.id

    const stock= await movement.sum('Quantity',{
        where:{productId: idProduct} }); res.json(stock)

   await movement.findAll({attributtes: ['productId', 'warehouseId', 'protocole', stock]}).then(allStock =>{res.json(allStock)})


    })

              


  







module.exports = app;