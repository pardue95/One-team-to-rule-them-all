const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}

// create fields/columns for Review model
Review.init(
    {
      reviewId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      book_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'book',
            key: 'book_id',
        }
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'userId',
        }
      },
      comment: {
        type: DataTypes.STRING
      },
      // created: {
      //   type: DataTypes.DATE,
      //   allowNull: false
      // },
      // updated: {
      //   type: DataTypes.DATE,
      //   allowNull: false
      //     }
      },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'review'
    }
  );
  
module.exports = Review;