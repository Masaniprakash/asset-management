module.exports = (sequelize, DataTypes) => {
    let Employee = sequelize.define('Employee', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Employee;
};