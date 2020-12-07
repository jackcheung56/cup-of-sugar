"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here

      User.hasMany(models.Item, {
        foreignKey: "owner_id",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      });

      User.belongsToMany(models.Item, {
        as: "b",

        through: models.Borrow,
        foreignKey: "item_id",

        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      });
      // end association here
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      passwordDigest: {
        type: DataTypes.STRING,
        field: "password_digest",
        allowNull: false,
      },
      area: DataTypes.INTEGER,
      rating: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
    }
  );
  return User;
};
