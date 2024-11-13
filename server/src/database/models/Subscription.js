const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Subscription', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      // usar un ENUM?
      values: ['1_month', '3_months', '6_months', '1_year'],
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    expirationDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'not_active',
    },
  });
};
