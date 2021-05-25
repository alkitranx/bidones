const {DataTypes} = require ('sequelize');

module.exports = sequelize => {
    return sequelize.define('productMovement',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        warehouseId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        measure: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        type: {
            type: DataTypes.ENUM('input', 'output'),
            allowNull: false,
        },
        protocol: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })
}
