const express = require('express');
const cors = require('cors');
const { sequelize, syncDatabase } = require('./database/db.js'); // Importa la configuración de la base de datos
const app = express();
const port = process.env.PORT || 5000;

//middlewares
app.use(express.json());
app.use(cors());

//rutas
app.get('/', (req, res) => {
  res.send('Welcome to the Project Management API');
});

//sincronización con la base de datos y arranque del servidor
const startServer = async () => {
  try {
    await syncDatabase();  // Asegúrate de que la base de datos esté sincronizada antes de arrancar el servidor
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Error starting the server:', error);
  }
};

startServer();
