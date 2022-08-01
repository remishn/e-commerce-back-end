const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
// create our category model
class Category extends Model {}
// define table columns and configuration
Category.init(
  {
    // define an id column
    id: {
      type: DataTypes.INTEGER,
      allowNull : false,
      primaryKey: true,
      autoIncrement: true
    },
    // define catagory name column
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
