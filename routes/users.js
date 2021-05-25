// global packages
const express = require('express'),
  app = express(),
  bcrypt = require('bcrypt'),
  {validationResult} = require('express-validator');

// local resources
const {userRepository} = require('../repositories'),
  {checkEmail, checkName, checkPassword, checkLastName} = require('../validations/validator');

app.get('/users', (req, res) => {
  return userRepository.findAll()
    .then(userEntities => res.json(userEntities))
    .catch(err => res.json(err));
});

app.post(
  '/users',
  [checkName, checkPassword, checkLastName, checkEmail],
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(400).json({errors: errors.array()})

    const body = req.body;

    return userRepository.create({
      name: body.name,
      lastName: body.lastName,
      email: body.email,
      password: bcrypt.hashSync(body.password, 10),
      role: body.role
    }).then(userChange => res.json(userChange))
      .catch(err => res.status(400).json(err))
  })

app.put(
  '/users/:id',
  [checkEmail, checkName, checkLastName],
  async (req, res) => {
    const id = req.params.id,
      body = req.body;

    return userRepository.update({
        name: body.name,
        surname: body.surname,
        email: body.email,
      }, {where: { id }}.then(userChange => res.json(userChange))
        .catch(err => res.status(400).json(err))
    )
  });

module.exports = app;
