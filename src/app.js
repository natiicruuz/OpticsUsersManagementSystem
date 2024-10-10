const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/UserRoutes');
require('dotenv').config();
require('./config/db');

const app = express();
app.use(express.json());

app.get('/', (req,res) => res.send("Hello world"));

app.use('/api/users', userRoutes);
const PORT = process.env.PORT || 3000;
console.log("holaaa");

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

