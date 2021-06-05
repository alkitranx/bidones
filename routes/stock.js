const express = require ('express'),
    app = express();

// local resources

const {validationResult} = require('express-validator'),
    {stockRepository} = require('../repositories/index');
const { getTotalStock, getStockByProtocol } = require('../repositories/stock');


app.get('/stock/:id', async (req,res) => {

    const productId = req.params.id;

    const movements = await stockRepository
    .findAll({
        where:{
            productId
        }
    });
    
    const totalStock = getTotalStock(movements);
    const stockByProtocol= getStockByProtocol(movements)

    return res.json({
        totalStock,
        stockByProtocol})

});




module.exports = app;

