const express = require('express');
const conectarDB = require('./config/db');

// crear el servidor
const app = express();

// Conectar a la base de datos
conectarDB();
// Habilitar expres.json
app.use(express.json({ extended: true }));

// puerto de la app
const port = process.env.PORT || 4000;
//importamoss todos los archivos de rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));

//arrancamos la app 
// arrancar la app
app.listen(port, '0.0.0.0', () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});