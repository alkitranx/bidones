module.exports= (sequelize, type) => {
    return sequelize.define('productStock', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: type.STRING,
            allowNull: false
        },
        status:{
            type: type.STRING,
            allowNull: false
        },
        measure:{
            type: type.STRING,
            allowNull: false
        },
        quantity: {
            type: type.INTEGER,
            allowNull: false
        
        }
    })

}