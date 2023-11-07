const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const User = require('../models/usersModel');

const register = asyncHandler(async (req, res) => {

    console.log("BODY-----", req.body);

    const { firstName, middleName, lastName, email, password, phoneNumber, address, securityAns } = req.body;
    if (!firstName || !lastName || !email || !password || !phoneNumber || !address || !securityAns) {
        res.status(400)
        throw new Error("All impoertant");
    }

        // TO CONFIRM THAT USER EXISTS OR NOT .....
    // const userAvaiable  =  await User.findOne({email});
    // if(userAvaiable){
    //     res.status(400);
    // throw new Error("User already exits");
    // }

    // HASH PASSWORD...
    const hashpassword = await bcrypt.hash(password, 10);
    console.log('NEW PASSWORD------- ', hashpassword);

    res.json({ message: 'Registration Controller' })
});

const login = asyncHandler(async (req, res) => {
    res.json({ message: 'Login Controller' })
});

const current = asyncHandler(async (req, res) => {
    res.json({ message: 'Registration Controller' })
});


module.exports = { register, login, current };