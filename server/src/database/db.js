const { Sequelize } = require('sequelize');
require('dotenv').config();
const path = require('path');

// configuración de la conexión
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
  }
);

//modelos
const UserModel = require('./models/User');
const ProjectModel = require('./models/Project');
const SubscriptionModel = require('./models/Subscription');
const TaskModel = require('./models/Task');

//definicion de los modelos
const User = UserModel(sequelize);
const Project = ProjectModel(sequelize);
const Subscription = SubscriptionModel(sequelize);
const Task = TaskModel(sequelize);

//relaciones
User.hasMany(Project, { foreignKey: 'userId' });
Project.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Task, { foreignKey: 'userId' });
Task.belongsTo(User, { foreignKey: 'userId' });

Project.hasMany(Task, { foreignKey: 'projectId' });
Task.belongsTo(Project, { foreignKey: 'projectId' });

User.hasMany(Subscription, { foreignKey: 'userId' });
Subscription.belongsTo(User, { foreignKey: 'userId' });


const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Database connected and synchronized');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = { sequelize, syncDatabase, User, Project, Subscription, Task };