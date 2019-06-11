'use strict'
module.exports = (sequelize, DataTypes) => {
  var hotel = sequelize.define(
    'table_hotel',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      longitude: {
        type: DataTypes.STRING
      },
      latitude: {
        type: DataTypes.STRING
      }
    },
    {
      classMethods: {
        associate: function (models) {
          // associations can be defined here
        }
      }
    }
  )
  return hotel
}
