const asyncHandler = require('express-async-handler');

const register = asyncHandler(async (req, res) => {
    res.json({ message: 'Registration Controller' })
});

const login = asyncHandler(async (req, res) => {
    res.json({ message: 'Login Controller' })
});

const current = asyncHandler(async (req, res) => {
    res.json({ message: 'Registration Controller' })
});


module.exports = { register, login, current };