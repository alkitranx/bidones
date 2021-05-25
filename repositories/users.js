const {userModel} = require("../models");

function findAll() {
  return userModel.findAll();
}

function create(payload) {
  return userModel.create(payload);
}

function update(payload) {
  return userModel.findAll(payload);
}

module.exports = {
  findAll,
  create,
  update
};
