const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Projects", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    projectName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    state: {
      type: DataTypes.ENUM,
      values: ["Pending", "In Progress", "Completed", "On Hold"],
      allowNull: false,
      defaultValue: "Pending",
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
    },
  });
};
