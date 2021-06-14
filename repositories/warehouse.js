const {warehouseModel} = require('../models/config');

function findAll() {
    return warehouseModel.findAll()
}

function create(payload) {
    return warehouseModel.create(payload)
}

function update(payload, condition ) {
    return warehouseModel.update(payload, condition)
}



module.exports = {
    findAll,
    create,
    update
}
