const {productModel} = require('../models/config');

function findAll() {
    return productModel.findAll()
}

function create(payload) {
    return productModel.create(payload)
}

function update(payload, condition ) {
    console.log(payload, condition)
    return productModel.update(payload, condition)
}



module.exports = {
    findAll,
    create,
    update
}
