const {movementModel} = require('../models/config');

function findAll() {
    return movementModel.findAll()
}

function create(payload) {
    return movementModel.create(payload)
}

function update(payload, condition ) {
    return movementModel.update(payload, condition)
}



module.exports = {
    findAll,
    create,
    update
}
