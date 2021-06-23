//Global packages

const express = require ('express'),
  app = express(),
  bcrypt = require('bcrypt'),
  {validationResult} = require('express-validator');



// local resources

const {checkEmail, checkName, checkPassword, checkLastName} = require('../validations/userValidations'),
  {validateJwt, validateAdminJWT}= require('../validations/validateJwt'),
  {userRepository}= require('../repositories/index');

app.get('/users', (req, res) => {

  return userRepository.findAll()
  .then(userEntities => res.json(userEntities))
  .catch(error => res.status(400).json(error));
});


app.post('/users',[ validateAdminJWT, checkName, checkPassword, checkLastName, checkEmail], (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
      return res.status(400).json({errors: errors.array()})
  };

  const body = req.body;

  userRepository.create({
    name: body.name,
    lastName: body.lastName,
    email: body.email,
    password: bcrypt.hashSync(body.password,10),
    role: body.role
    }).then(userCreate => res.json(userCreate))
      .catch(error => res.status(400).json(error));
});

app.put('/users/:id', [validateAdminJWT, checkEmail, checkName, checkLastName] , async (req, res) => {

  const errors = validationResult(req);
  if(!errors.isEmpty()){
      return res.status(400).json({errors: errors.array()})
  };

  const id = req.params.id;
  const body= req.body;  

  userRepository.update({ //@TODO tengo que revisar porque no me toma la funcion
    name: body.name,
    lastName: body.lastName,
    email: body.email    
    }, {where:{id}})
    .then(userChange => res.json(userChange), console.log(typeof id))
    .catch(error => res.status(400).json(error))
  
  }); 

     


app.delete('/users/:id',[validateAdminJWT] ,(req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
      return res.status(400).json({errors: errors.array()})
  };
  
  const id= req.params.id;
  const body = req.body;

  return userRepository.update({
    status: 'inactive'
    },{where: {id}})
    .then(userDelete => res.json(userDelete))
    .catch(error => res.status(500).json(error))
});

module.exports = app;