const mongoose = require('mongoose');

const permitSchema = mongoose.Schema({
    builderID: {
        type: String,
        required: true
    },
    builderName: {
        type: String,
        required: [true, 'Please add your full name']
    },
    builderEmail: {
        type: String,
        required: [true, 'Please add your email']
    },
    builderPhoneNumber: {
        type: Number,
        required: [true, 'Please add you Number']
    },
    location: {
        type: String,
        required: [true, 'Please add the location']
    },
    details: {
        type: String,
        required: [true, 'Please add the details']
    },
    status:{
        type: String,
        enum:['Approved','Pending', 'Decline']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('permit', permitSchema);