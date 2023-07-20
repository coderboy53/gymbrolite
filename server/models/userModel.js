const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter the name'] 
    },
    username: {
        type: String,
        required: [true, 'Please enter a username']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email id']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password']
    },
    height: {
        type: mongoose.Decimal128,
        required: ['false']
    },
    weight: {
        type: mongoose.Decimal128,
        required: ['false']
    },
})

const User = mongoose.model('users',userSchema);
module.exports = User;