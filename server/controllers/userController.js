const mongoose = require('mongoose');
const mongoUser = process.env.USERNAME;
const mongoPass = process.env.PASSWORD;
const login = async (req, res) => {
    await mongoose.connect(`mongodb+srv://${mongoUser}:${mongoPass}@cluster0.ppcxe1f.mongodb.net/?retryWrites=true&w=majority`)
};

const register = async (req, res) => {
    await mongoose.connect(`mongodb+srv://${mongoUser}:${mongoPass}@cluster0.ppcxe1f.mongodb.net/?retryWrites=true&w=majority`)
};

module.exports = {
    login,
    register
};