const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Task', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    state: {
        type: DataTypes.ENUM,
        values: ['Pending', 'In Progress', 'Completed', 'On Hold'],
        allowNull: false,
        defaultValue: 'Pending'
    },
    comments: {
        type: DataTypes.TEXT,
        allowNull: true,
    }
  });
};
