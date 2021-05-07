const express = require ('express');
const app = express();
const {user} = require('../BD/config');
const bcrypt = require('bcrypt');
const {body, validationResult, params} = require('express-validator');
const {checkEmail, checkName, checkPassword, checkLastName} = require('../validations/validator');
const { QueryTypes } = require('sequelize');



app.get('/listuser', async (req, res) => {

  await user.findAll().then(allUser => {
    res.json(allUser)
  }).cath(err => {
    res.json(err)
  });

 
  

  

});


app.post('/signup',[ checkName, checkPassword, checkSurname, checkEmail], async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
      return res.status(400).json({errors: errors.array()})
  };


  let body = req.body;


  let UserCreate = await user.create({

  name: body.name,
  lastName: body.lastName,
  email: body.email,
  password: bcrypt.hashSync(body.password,10),
  role: body.role
  }).then(userChange => {
    res.json(userChange)
  }).catch(err => {
    res.json(err)
  })
  







})

app.put('/signup/:email', [checkEmail, checkName, checkSurname] ,async (req, res) => {

  let email= req.params.email;
  let body = req.body;
 

  let userModify = await user.update({

    name: body.name,
    surname: body.surname,
    email: body.email,
  },{where:{email: email}}.then(userChange => {
    res.json(userChange)
  }).catch(err => {
    res.json(err)
  })


)});

app.delete('/signup/:email', async (req, res) => {

  let email= req.params.email;

  await user.destroy({where :{email: email}}).then(userDelete => {
    res.json(userDelete)
  }).catch(err => {
    res.json(err)
  });



})

module.exports = app;