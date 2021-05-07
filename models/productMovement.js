module.exports = (sequelize, type) => {
    return sequelize.define('productMovement',{
        id: {
            type: type.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },

        measure: {
            type: type.STRING,
            allowNull: false
        },
        quantity: {
            type: type.INTEGER,
            allowNull: false
        
        },
        typeMovement: {
            type: type.STRING,
            allowNull: false            
        },
        protocol: {
            type: type.STRING,
            allowNull: false
        }


    })
}