const express = require('express');
const app = express();
0
const {movementModel, productModel} = require('../models');
const {
  checkUbication,
  checkMovement,
  checkProtocol,
  checkQuantity,
  checkProduct,
  checkMeasure
} = require('../validations/validator')
const {check, validationResult, body} = require('express-validator');


app.get('/movements', async (req, res) => {

  const movements = await movementModel.findAll().then(allMovements => {
    res.json(allMovements)
  })


});

app.post(
  '/movements',
  [checkMeasure, checkProduct, checkProtocol, checkQuantity, checkUbication, checkMovement],
  (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({errors: errors.array()})

  const body = req.body;
  return movementModel.create({
    productId: body.productId,
    protocol: body.protocol,
    quantity: body.quantity,
    measure: body.measure,
    userId: body.user,
    warehouseId: body.warehouseId,
    type: body.type
  }).then(movement => {
    res.json(movement)
  })
    .catch(error => {
      res.json(error)
    })
});

app.put('/movements/:id', [checkMeasure, checkProduct, checkProtocol, checkQuantity, checkUbication, checkMovement], async (req, res) => {

  const id = req.params.id;
  const body = req.body;

  await movementModel.update({
      productId: body.product,
      protocol: body.protocol,
      quantity: body.quantity,
      measure: body.measure,
      userId: body.user,
      warehouseId: body.warehouse,
      typeMovement: body.tipemovement
    },
    {where: {id: id}}).then(updateMovement => res.json(updateMovement))
    .catch(error => res.json(error))


})


app.delete('/movements/:id', async (req, res) => {

  const id = req.params.id

  await movementModel.destroy({where: {id: id}})
    .then(deleteMovement => res.json(deleteMovement))
    .catch(error => res.json(error))

})


module.exports = app;
