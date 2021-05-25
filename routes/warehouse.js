const express = require('express');
const app = express();
const {warehouseModel} = require('../models');
const {checkWarehouse} = require('../validations/validator');
const {check, validationResult} = require('express-validator');

app.get('/warehouse', async (req, res) => {

  let ubication = await warehouseModel.findAll();
  res.json(ubication)


});

app.post('/warehouse', [checkWarehouse], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({errors: errors.array()})


  let body = req.body;

  return warehouseModel.create({
    name: body.name
  }).then(ubication => {
    res.json(ubication)
  }).catch(error => {
    res.json(error)
  });


});

app.put('/warehouse/:name', [checkWarehouse], async (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()})
  }
  ;

  const name = req.params.name;
  const body = req.body


  let warehouseModify = await warehouseModel.update({nameContainer: body.name}, {where: {nameContainer: name}}
  ).then(nameModify => {
    res.json(nameModify)
  }).catch(err => {
    res.json(err)
  });

});

app.delete('/warehouse/:name', async (req, res) => {

  let name = req.params.name;
  let warehouseDelete = await warehouseModel.destroy({where: {nameContainer: name}}
  ).then(nameDelete => {
    res.json(nameDelete)
  }).catch(err => {
    res.json(err)
  });


});


module.exports = app
