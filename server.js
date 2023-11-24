const express = require('express');
const cors = require('cors');
const errorHandle = require('./middleware/errorHandle');
const dbconnection = require('./config/dbConnection');
const app = express();
const dotenv = require('dotenv').config();

const port = process.env.PORT || 5000;

// Corrected function call for database connection


// TO GET THE CONTENT FROM REQ BODY....
app.use(express.json());

app.use(cors());

// ROUTES...
app.use('/api', require('./routes/messageRoute'));
app.use('/api/users', require('./routes/usersRoute'));
app.use('/api/permit', require('./routes/permitRoute'));
// app.use('/api/appartment', require(''));
// app.use('/api/contact', require(''));

app.use(errorHandle);   // ERROR FILE...

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
