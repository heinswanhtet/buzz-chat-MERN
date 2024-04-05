const mongoose = require('mongoose')

const ChatSchema = new mongoose.Schema(
    {
        participants: [
            {
                type: mongoose.Types.ObjectId,
                ref: 'User',
            }
        ],
        messages: [
            {
                type: mongoose.Types.ObjectId,
                ref: 'Message',
                default: []
            }
        ]
    },
    { timestamps: true }
)

module.exports = mongoose.model('Chat', ChatSchema)