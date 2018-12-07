'use strict';
module.exports = (sequelize, DataTypes) => {
  const Container = sequelize.define('Container', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false
    },
    volume: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Container.associate = function(models) {
    // associations can be defined here
    Container.hasMany(models.Object, {as: "Content"});
  };
  return Container;
};