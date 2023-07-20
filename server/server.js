const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const port = process.env.PORT || 5000;

const connect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connection started at ${conn.connection.host}`)
    } catch (error) {
        console.error(error);
    }
}

app.listen(port, () => {console.log(`Server started at port: ${port}`)});

connect();

app.use('/user', require('./routes/userRoutes'));
// app.use('/workouts');


