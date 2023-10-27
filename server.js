const express = require('express');
const errorHandle = require('./middleware/errorHandle');
const dbconnection = require('./config/dbConnection');
const app = express();
const dotenv = require('dotenv').config();

const port = process.env.PORT || 5000;

dbconnection;

// TO GET THE CONTENT FROM REQ BODY....
app.use(express.json());

// ROUTES...
// app.use('/api/dashboard', require(''));
app.use('/api/users', require('./routes/usersRoute'));
app.use('/api/permit', require('./routes/permitRoute'));
// app.use('/api/appartment', require(''));
// app.use('/api/contact', require(''));

app.use(errorHandle);   // ERROR FILE...

app.listen(4000, () => {
    console.log(`Server is running on ${port}`);
});