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
        Measure:{
            type: type.STRING,
            allowNull: false
        },
        Quantity: {
            type: type.INTEGER,
            allowNull: false
        
        }
    })

}