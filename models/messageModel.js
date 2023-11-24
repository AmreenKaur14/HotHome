const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    message: {
        type: String,
        required: [false, 'Please add your message here']
    },
    email: {
        type: String,
        required: [true, 'Please add your email']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('message', messageSchema);