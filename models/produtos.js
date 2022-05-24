'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produtos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Produtos.init({
    quantidade: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    marca: DataTypes.STRING,
    custo: DataTypes.FLOAT,
    preco: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'produtos',
  });
  return Produtos;
};