const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema(
    {
        sender: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: true
        },
        receiver: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: true
        },
        message: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model('Message', MessageSchema)