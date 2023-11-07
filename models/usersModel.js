const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please add your first name']
    },
    middleName: {
        type: String
    },
    lastName: {
        type: String,
        required: [true, 'Please add your last name']
    },
    email: {
        type: String,
        required: [true, 'Please add your email'],
        unique: [true, 'your email ID must be unique']
    },
    password: {
        type: String,
        required: [true, 'Please add your password']
    },
    phoneNumber: {
        type: Number,
        required: [true, 'Please add you Number']
    },
    address: {
        type: String,
    },
    securityAns: {
        type: String,
        required: [false, 'Please add your security answer']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('users', usersSchema);