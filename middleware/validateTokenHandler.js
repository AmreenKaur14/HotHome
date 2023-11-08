const asyncHandler = require('express-async-handler');
const jsonwebtoken = require('jsonwebtoken');

const validateToken = asyncHandler(async (req, res, next) => {
    // console.log('IN VERIFICATION----1 -----');
    let token;
    let authHeader = req.headers.authorization || req.headers.Authorization;
    if (authHeader && authHeader.startsWith("Bearer")) {

        // console.log('IN---  IF  --- VERIFICATION----1 -----');

        token = authHeader.split(" ")[1];
        jsonwebtoken.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                res.status(401);
                return next(new Error("USER NOT AUTHORIZED")); // Call next with an error
            }
            // console.log("NO ERROR IN AUTH----");
            req.user = decoded.user;
            console.log(decoded);
            next(); // Call next to continue the request handling
        });
    } else {
        // If there is no token, you can handle it as needed, e.g., return a 401 error or proceed without authentication
        res.status(401);
        return next(new Error("No token provided"));
    }
});

module.exports = validateToken;
