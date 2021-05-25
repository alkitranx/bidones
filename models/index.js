const {Sequelize} = require ('sequelize');

const ProductsModel = require('./products');
const UsersModel = require('./users');
const WarehouseModel= require('./warehouse');
const MovementModel= require('./productMovement');

const sequelize = new Sequelize('bphoyfowf8rcsmu5apww', 'uahjdwgt58mhekas', 'CKwokzMpfaAijUhJwQZw', {

    host: 'bphoyfowf8rcsmu5apww-mysql.services.clever-cloud.com',
    dialect: 'mysql'


});
const product = ProductsModel(sequelize);
const user = UsersModel(sequelize);
const warehouse  = WarehouseModel(sequelize);
const movement = MovementModel(sequelize);

//asociaciones entre tablas

// un usuario realiza  muchos movimientos
user.hasMany(movement);

//un producto puede tener muchos movimientos
product.hasMany(movement, { foreignKey: 'productId'});

//un deposito para distintos movimientos
warehouse.hasMany(movement, { foreignKey: 'warehouseId'});


//@TODO buscar mecanismo de syncronizacion mas efectivo
sequelize.sync({force: false})
.then(() => {
    console.log('Tablas sincronizadas')
});

module.exports = {
    sequelize,
    productModel: product,
    userModel: user,
    warehouseModel: warehouse,
    movementModel: movement,
}


