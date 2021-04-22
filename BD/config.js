const {Sequelize} = require ('sequelize');
const { QueryTypes } = require('sequelize')

const ProductsModel = require('../models/products');
const UsersModel= require('../models/users');
const WarehouseModel= require('../models/warehouse');
const movementModel= require('../models/productMovement');
const stockModel= require('../models/productStock');

const sequelize = new Sequelize('bidones', 'root', 'redneh0277', {
    
    host: 'localhost',
    dialect: 'mysql'


}); 
const product = ProductsModel(sequelize, Sequelize);
const user = UsersModel(sequelize, Sequelize);
const warehouse  = WarehouseModel(sequelize, Sequelize);
const movement= movementModel(sequelize, Sequelize);
const stock= stockModel(sequelize, Sequelize);

//asociaciones entre tablas

// un usuario realiza  muchos movimientos 
user.hasMany(movement);

//un producto puede tener muchos movimientos
product.hasMany(movement);

// un producto puede tener muchos cambios de stock
product.hasMany(stock);

//un deposito para distintos movimientos
warehouse.hasMany(movement);

//varias posiciones del deposito un mismo stock tengo que revisar esta tabla
stock.belongsTo(warehouse);





sequelize.sync({force: false})
.then(() => {
    console.log('Tablas sincronizadas')
});

module.exports = {
    product,
    user,
    warehouse,
    movement,
    stock,
    sequelize
}


