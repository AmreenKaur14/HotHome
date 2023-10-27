const asyncHandler = require('express-async-handler');
const permitModel = require('../models/permitModel');


const getPermit = asyncHandler(async (req, res) => {
    const permits = await permitModel.find();
    res.status(200).json(permits);
});

const createPermit = asyncHandler(async (req, res) => {

    console.log("BODY-----", req.body);
    
    const { builderID, builderName, builderEmail, builderPhoneNumber, location, details, status } = req.body;
    if (!builderID || !builderName || !builderEmail || !builderPhoneNumber || !location || !details || !status) {
        res.status(400)
        throw new Error("All impoertant");
    }
    
    const permits = await permitModel.create({
        builderID,
        builderName,
        builderEmail,
        builderPhoneNumber,
        location,
        details,
        status
    });

    res.status(200).json(permits);
});

module.exports = { getPermit, createPermit }; 