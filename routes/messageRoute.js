const express = require('express');
const router = express.Router();
const Message = require('../models/messageModel');
const asyncHandler = require('express-async-handler');

router.post('/messagedata', asyncHandler(async (req, res, next) => {
    console.log("BODY-----", req.body);
    const { message, email } = req.body;
    if (!message || !email) {
        const error = new Error("All important fields are required.");
        error.status = 400;
        return next(error);
    }

    const result = await Message.create({
        message,
        email
    });

    res.status(200).json(result);
}));

module.exports = router;
