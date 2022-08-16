'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class historico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      historico.belongsTo(models.produtos, { foreignKey: 'produto_id'})
    }
  }
  historico.init({
    produto_id: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    quantidade: DataTypes.STRING,
    valor: DataTypes.FLOAT,
    preco: DataTypes.FLOAT,
    tipo: DataTypes.STRING,
    data: DataTypes.STRING,
    marca: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'historico',
  });
  return historico;
};