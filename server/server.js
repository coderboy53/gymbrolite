const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded);
const port = process.env.PORT || 5000;


app.use('/user', require('./routes/userRoutes'));
app.use('/workouts');




