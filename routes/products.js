// Global packages
const express = require ('express'),
  app = express(),
  {validationResult} = require('express-validator');

// local resources
  const { productRepository } = require('../repositories/index'),
  { checkType, checkCode, checkDescription } = require('../validations/validator');

app.get('/products', (req, res) => {

  productRepository.findAll()
  .then(productEntities => res.json(productEntities))
  .catch(error=> res.status(400).json(error))   
  
  }); 



app.post('/products',[ checkType, checkCode, checkDescription], (req, res) => {
   
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    };

    const body  = req.body;

    productRepository.create({
      type: body.type,
      code: body.code,
      description: body.description})
       .then(createProduct => res.json(createProduct))
       .catch(err => res.json.status(400).json(err))       
       
});

app.put('/products/:id', [checkType, checkCode, checkDescription], (req, res) => {

  const errors = validationResult(req);
  if(!errors.isEmpty()){
      return res.status(400).json({errors: errors.array()})
  };

  const id = req.params.id;
  const body = req.body;

    productRepository.update({
      type : body.type,
      code : body.code,
      description: body.description
      },{where:{id}})
      .then(productChange => res.json(productChange))
      .catch(error =>res.status(400).json(error)) 
});

app.delete('/products/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    
      productRepository.update({
        status: body.status
      }, {where: {id}})
      .then(productInactive => res.json(productInactive))
      .catch(error => res.status(400).json(error))
  });


module.exports = app;