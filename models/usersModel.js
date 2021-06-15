const {DataTypes} = require('sequelize')

module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        status:{
            type: DataTypes.ENUM('active', 'inactive'),
            defaultValue: 'active'            
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
            
        },
        role: {
            type: DataTypes.ENUM('user', 'admin'),
            defaultValue: 'user' 
        }






    })




}
