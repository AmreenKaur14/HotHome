const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const User = require('../models/usersModel');
const dotenv = require('dotenv').config();

// RESIGTER ----
const register = asyncHandler(async (req, res) => {

    console.log("BODY-----", req.body);

    const { firstName, middleName, lastName, email, password, phoneNumber, address, securityAns } = req.body;
    if (!firstName || !lastName || !email || !password || !phoneNumber || !address || !securityAns) {
        res.status(400)
        throw new Error("All impoertant");
    }

    // TO CONFIRM THAT USER EXISTS OR NOT .....
    const userAvaiable  =  await User.findOne({email});
    if(userAvaiable){
        res.status(400);
    throw new Error("User already exits");
    }

    // HASH PASSWORD...
    const hashpassword = await bcrypt.hash(password, 10);
    console.log('NEW PASSWORD------- ', password);


    const userRes = await User.create({
        firstName, middleName, lastName, email, password: hashpassword, phoneNumber, address, securityAns
    });
    res.status(200).json(userRes);
    // res.json({ message: 'Registration Controller' })
});


// LOGIN---
const login = asyncHandler(async (req, res) => {
    console.log('IN LOGIN------');
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory! ")
    }
    // console.log(process.env.ACCESS_TOKEN_SECRET);

    const userResult = await User.findOne({ email });
    if (userResult && await bcrypt.compare(password, userResult.password)) {
        // console.log('IN IF------',userResult);
        // console.log(process.env.ACCESS_TOKEN_SECRET);
        const accessToken = jsonwebtoken.sign({
            user: {
                email: userResult.email,
                id: userResult.id,
            }
        }, process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "10m" }
            
        );
        console.log('DECRYPTED THE PASSWORD-----',accessToken);
        res.json({ accessToken });
    } else {
        res.status(401);
        throw new Error("email or password does not match...")
    }
});


const current = asyncHandler(async (req, res) => {
    res.json({ message: 'Current Controller' })
});


module.exports = { register, login, current };