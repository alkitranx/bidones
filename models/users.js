module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: type.STRING,
            allowNull: true
        },
        surname: {
            type: type.STRING,
            allowNull: true
        },
        email: {
            type: type.STRING,
            allowNull: true,
            unique: true
        },
        password:{
            type: type.STRING,
            allowNull: true
            
        },
        role: {
            type: type.STRING,
            allowNull: true
        }






    })




}
