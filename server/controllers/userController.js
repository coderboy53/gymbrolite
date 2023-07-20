const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 15;
const login = asyncHandler(async (req, res) => {
    const data = req.body;
    const result = await User.findOne({username: data.username});
    const password = result.password;
    bcrypt.compare(data.password, password, (err, valid) => {
        if(valid)
        {
            const token = jwt.sign({username: result.username});
            res.status(200).json({message: "User logged in", token});
        }
        else{
            res.status(401).json({message: "Incorrect credentials"});
        }
    })
});

const register = asyncHandler(async (req, res) => {
   const data = req.body;
   const result = await User.findOne({username: data.username});
   if(result)
   {
        res.status(400).json({message: "User already exists"});
   }
   else{
        bcrypt.hash(data.password, saltRounds, (err, hash) => {const newUser = new User({name:data.name, username: data.username, email:data.email, password: hash, height: data.height, weight: data.weight});
        newUser.save().then(() => {res.status(200).json({message: "User added successfully"})}).catch((error) => {console.error(error)});})
   }
//    const result = await User.findOne({username: data.username});
});

module.exports = {
    login,
    register
};