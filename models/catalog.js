// models/catalog.js
'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Catalog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Catalog.init({
    modelo: DataTypes.STRING,
    time: DataTypes.STRING,
    ano: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Catalog',
  });
  return Catalog;
};
