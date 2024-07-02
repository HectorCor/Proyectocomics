// app.js
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./auth/auth');
const comicsRoutes = require('./comics/comics');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/comics', comicsRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
