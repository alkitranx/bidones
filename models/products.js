const {DataTypes} = require ('sequelize');

module.exports = sequelize => {
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
            unique: true //@TODO necesito cambiar el mensaje de error que se muestra cuando aplica esto//
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
};
