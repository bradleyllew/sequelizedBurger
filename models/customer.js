'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    user_name: DataTypes.STRING,
    allowNull: false,
    burger_name: DataTypes.STRING
  }, {});
  
  // joining customer model with burger model
  Customer.associate = function(models) {
    // associations can be defined here
    Customer.hasMany(models.Burger, {
      onDelete: "cascade"
    });
  };
  return Customer;
};