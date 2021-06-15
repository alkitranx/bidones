
const {userModel} = require('../models/config')


function findAll() {
    return userModel.findAll()
}

function create(payload) {
    return userModel.create(payload)
}

function update(payload, condition ) {
    return userModel.update(payload, condition)
}


function findByEmail(email){
    return userModel.findOne({where:{email}})
}



module.exports = {
    findAll,
    create,
    update,
    findByEmail
}
