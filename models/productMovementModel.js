const {DataTypes} = require('sequelize');
const user = require('./usersModel')

module.exports = (sequelize, type) => {
    return sequelize.define('productMovement',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },

        measure: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        warehouseId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        
        },
        status:{
            type: DataTypes.ENUM('active', 'inactive'),
            defaultValue: 'active'            
        },
        type: {
            type: DataTypes.ENUM,
            values:['input', 'output'],
            allowNull: false            
        },
        protocol: {
            type: DataTypes.STRING,
            allowNull: false
        }


    })
}
  