const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
app.use(express.json());
app.use(express.urlencoded);
const port = process.env.PORT || 5000;
app.use('/user', require('./routes/userRoutes'));




