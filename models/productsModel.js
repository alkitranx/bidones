const {DataTypes} = require('sequelize')

module.exports = (sequelize, type) => {
    return sequelize.define('product', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        type:{
            type: DataTypes.STRING(2),
            allowNull: false
            },
        code: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true // @TODO necesito cambiar el mensaje de error que se muestra cuando aplica esto//
        },
        status:{
            type: DataTypes.ENUM('active', 'inactive'),
            defaultValue: 'active'            
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false           
        }           
    })
};