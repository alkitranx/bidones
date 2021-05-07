module.exports = (sequelize, type) => {
    return sequelize.define('product', {
        idProduct: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        typeProduct:{
            type: type.STRING(2),
            allowNull: false
            },
        codProduct: {
            type: type.STRING,
            allowNull: false,
            unique: true //necesito cambiar el mensaje de error que se muestra cuando aplica esto//
        },
        description: {
            type: type.STRING,
            allowNull: false           
        }           
    })
};