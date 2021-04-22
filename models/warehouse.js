module.exports = (sequelize, type) => {
    return sequelize.define('warehouse',{
        id: {
            type: type.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            unique: true
        },
        nameContainer: {
            type: type.STRING,
            allowNull: false,
            unique: true
        }
    } )

}