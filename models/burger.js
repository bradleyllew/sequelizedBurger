'use strict';
module.exports = (sequelize, DataTypes) => {
  const Burger = sequelize.define('Burger', {
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN 
  });

  // dlb - you'll want to make sure you can work with one
  // table before you wire this up. then you can refactor
  // your routes to do more.
   
  // // joining burger model with customer model
  // Burger.associate = function(models) {
  //   // associations can be defined here
  //   Burger.belongsTo(models.Customer, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };
  return Burger;
};