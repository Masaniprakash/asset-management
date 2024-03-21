// Employee.js

module.exports = (sequelize, DataTypes) => {
    let AssetCategory = sequelize.define('AssetCategory', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return AssetCategory;
};
// export default AssetCategory;
