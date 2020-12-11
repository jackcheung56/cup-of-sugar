'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Borrow extends Model {

    static associate(models) {
      // define association here
      // end association here
    }
  };
  Borrow.init({
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    itemId: {
      type: DataTypes.INTEGER,
      field: 'item_id',
      references: {
        model: 'items',
        key: 'id'
      }
    },
    status: DataTypes.ENUM('Returned', 'Active', 'Overdue'),
    duration: DataTypes.STRING,
    accepted: DataTypes.BOOLEAN,
    photo: DataTypes.STRING,
    info: DataTypes.STRING,
    contactId: {
      type: DataTypes.INTEGER,
      field: 'contact_id'
    },
    product: DataTypes.STRING,
    requester: DataTypes.STRING,
    message: DataTypes.STRING,
    form: DataTypes.STRING,
    holder: DataTypes.STRING,
    number: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Borrow',
    tableName: 'borrows'
  });
  return Borrow;
};