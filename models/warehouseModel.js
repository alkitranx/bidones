const {DataTypes}= require('sequelize')

module.exports = (sequelize, type) => {
    return sequelize.define('warehouse',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        status:{
            type: DataTypes.ENUM('active', 'inactive'),
            defaultValue: 'active'            
        }
    } )

}