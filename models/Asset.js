module.exports = (sequelize, DataTypes) => {
    let Asset = sequelize.define('Asset', {
        serialNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
    });
    return Asset;
}

// export default Asset;