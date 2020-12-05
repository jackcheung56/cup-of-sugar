'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      // define association here

      User.hasMany(models.Item, {
        foreignKey: 'owner_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      })


      User.belongsToMany(models.Item,{
        
        as: 'b',

        through: models.Borrow,
        foreignKey:'user_id',

        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      })

      // end association here
    }
  };
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    passwordDigest: {
      type: DataTypes.STRING,
      field: 'password_digest'
    },
    area: DataTypes.INTEGER,
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};