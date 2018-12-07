'use strict';
module.exports = (sequelize, DataTypes) => {
  const Object = sequelize.define('Object', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Object.associate = function(models) {
    // associations can be defined here
    Object.belongsTo(models.Container)
  };
  return Object;
};