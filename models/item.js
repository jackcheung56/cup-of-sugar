'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    

    static associate(models) {
      // define association here
      
      Item.belongsTo(models.User, {
        foreignKey: 'owner_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      })

      Item.belongsToMany(models.User, {
        as: 'a',
        through: models.Borrow,
        foreignKey: 'user_id',

        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      })
      // end association here
    }
  };
  Item.init({
    title: DataTypes.STRING,
    isBorrowed: {
      type: DataTypes.BOOLEAN,
      field: 'is_borrowed',
      allowNull: false,
      defaultValue: true
    },
    category: DataTypes.STRING,
    ownerId: {
      type: DataTypes.INTEGER,
      field: 'owner_id',
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Item',
    tableName: 'items'
  });
  return Item;
};