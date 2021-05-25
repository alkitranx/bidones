const express = require('express');
const app = express();
const {movementModel} = require('../models');

//@TODO este es el que estoy pegado
app.get('/stock/:id', async (req, res) => {
  const productId = req.params.id

  const movements = await movementModel
    .findAll({
      where: {
        productId
      }
    });

  const totalStock = getTotalStock(movements),
    stockByProtocols = getStockByProtocol(movements);

  return res.json({
    totalStock,
    stockByProtocols,
  })
})

function getTotalStock (movements) {
  let totalStock = 0;

  movements.forEach(movement => {
    if(movement.type === 'input')
      totalStock = parseInt(totalStock) + parseInt(movement.quantity);

    if(movement.type === 'output')
      totalStock = parseInt(totalStock) - parseInt(movement.quantity);
  });

  return totalStock;
}

function getStockByProtocol(movements) {
  let stockByProtocols = {};

  movements.forEach(movement => {
    if(!stockByProtocols[movement.protocol])
      stockByProtocols[movement.protocol] = 0;

    if(movement.type === 'input')
      stockByProtocols[movement.protocol] =
        parseInt(stockByProtocols[movement.protocol])
        + parseInt(movement.quantity);

    if(movement.type === 'output')
      stockByProtocols[movement.protocol] =
        parseInt(stockByProtocols[movement.protocol])
        - parseInt(movement.quantity);
  });

  return stockByProtocols;
}

module.exports = app;
