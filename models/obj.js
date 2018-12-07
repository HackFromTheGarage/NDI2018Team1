'use strict';
module.exports = (sequelize, DataTypes) => {
  const Obj = sequelize.define('Obj', {
    nom: {
      type: DataTypes.STRING,
      allowNull: false
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Obj.associate = function(models) {
    // associations can be defined here
    Obj.belongsTo(models.Container)
  };
  return Obj;
};