"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const dbConnect = require("../config/config");
const db = {};

const { DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_HOST, DB_PORT, DB_DIALECT } =
  process.env;

console.log("DB_DATABASE", DB_DATABASE, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_DIALECT);
console.log(process.env.DB_DATABASE);
let sequelize ;
// try {
    sequelize = dbConnect;
// } catch (error) {
//     console.log("error", error.message);
// }

// console.log("DB_DATABASE", DB_DATABASE);

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

sequelize
  .authenticate()
  .then((x) => {
    console.log("db connected!.");
  })
  .catch((e) => {
    console.log("something wrong to connect db!.", e.message);
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
