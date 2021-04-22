module.exports = (sequelize, type) => {
    return sequelize.define('productMovement',{
        id: {
            type: type.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },

        Measure: {
            type: type.STRING,
            allowNull: false
        },
        Quantity: {
            type: type.INTEGER,
            allowNull: false
        
        },
        tipeMovement: {
            type: type.STRING,
            allowNull: false            
        },
        protocole: {
            type: type.STRING,
            allowNull: false
        }


    })
}