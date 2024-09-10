require('dotenv').config();
const express = require('express');
const app = express();
const port = 5650; // Définissez le port sur lequel votre serveur écoutera
const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors({
    origin: ['http://localhost:5173']
    }
  ));

const userRoutes = require('./routes/user');
const requestsRoutes = require('./routes/requests');

const DB_URI = process.env.DB_URI;
app.use(express.json());
app.use('/api/user', userRoutes);
app.use('/api/request', requestsRoutes);


mongoose.Promise=global.Promise;
mongoose.connect(DB_URI)
  .then(() => console.log('Connection à MongoDB réussie !')
  )
  .catch((error) => console.log('Connection à MongoDB échouée !', error));  
  // Configuration de la stratégie locale
  

// Écoute du serveur sur le port spécifié
app.listen(port, () => {
    console.log(`Le serveur écoute sur le port ${port}`);
});
