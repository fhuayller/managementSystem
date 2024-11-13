const express = require('express');
const cors = require('cors');
const { sequelize, syncDatabase } = require('./database/db.js');
const routes = require('./routes')
const app = express();
const port = process.env.PORT || 3000;

//middlewares
app.use(express.json());
app.use(cors());

//rutas
app.use('/api', routes)

//sincronización con la base de datos y arranque del servidor
const startServer = async () => {
  try {
    await syncDatabase();
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Error starting the server:', error);
  }
};

startServer();
