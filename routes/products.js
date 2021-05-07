const express = require ('express');
const app = express();
const { product } = require('../BD/config');
const {check, validationResult} = require('express-validator');
const { checkType, checkCode, checkDescription } = require('../validations/validator');

app.get('/products', async (req, res) => {

    const products = await product.findAll();
    res.json(products);   
  
  });
  



  



app.post('/product',[ checkType, checkCode, checkDescription] ,async (req, res) => {
   
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    };
    let body  = req.body;

    
    



   let createProduct = await product.create({
       typeProduct : body.tipo,
       codProduct : body.codigo,
       description: body.descripcion
   }).then(createProduct => {
     res.json(createProduct);
   }).catch(err => {
     res.json(err);
   })
 




     
  });

app.put('/product/:code', [checkTipe, checkCode, checkDescription], async (req, res) => {

  const errors = validationResult(req);
  if(!errors.isEmpty()){
      return res.status(400).json({errors: errors.array()})
  };


    let code = req.params.code
    let body = req.body

  let modifyUser = await product.update({
    typeProduct : body.tipo,
    codProduct : body.codigo,
    description: body.descripcion
}, {where:{codProduct: code}}).then(modifyUser => {
  res.json(modifyUser);
}).catch(err => {
  res.json(err);
})



  
  });

app.delete('/product/:code', async (req, res) => {

    let code = req.params.code;
    let productDelete= await product.destroy({where: {codProduct: code}});

    res.json(productDelete)
  
  });


module.exports = app;