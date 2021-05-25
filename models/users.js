const {DataTypes} = require ('sequelize');

module.exports = sequelize => {
    return sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true
        },
        password:{
            type: DataTypes.STRING,
            allowNull: true

        },
        role: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })
}
