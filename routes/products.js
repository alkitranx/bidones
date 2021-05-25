const express = require('express');
const app = express();
const {productModel} = require('../models');
const {check, validationResult} = require('express-validator');
const {checkType, checkCode, checkDescription} = require('../validations/validator');

app.get('/products', async (req, res) => {
  return productModel.findAll()
    .then((products) => res.json(products));
});


app.post('/products',
  [checkType, checkCode, checkDescription],
  (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({errors: errors.array()})
  let body = req.body;

  return productModel.create({
    type: body.type,
    code: body.code,
    description: body.description
  }).then(createProduct => {
    res.json(createProduct);
  }).catch(err => {
    res.json(err);
  })
});

app.put('/products/:code', [checkType, checkCode, checkDescription], async (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()})
  }
  ;


  let code = req.params.code
  let body = req.body

  let modifyUser = await productModel.update({
    typeProduct: body.tipo,
    codProduct: body.codigo,
    description: body.descripcion
  }, {where: {codProduct: code}}).then(modifyUser => {
    res.json(modifyUser);
  }).catch(err => {
    res.json(err);
  })


});

app.delete('/products/:code', async (req, res) => {

  let code = req.params.code;
  let productDelete = await productModel.destroy({where: {codProduct: code}});

  res.json(productDelete)

});


module.exports = app;
