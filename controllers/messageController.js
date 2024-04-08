const User = require("../models/User")
const Message = require("../models/Message")
const Chat = require("../models/Chat")
const CustomError = require("../errors")
const { StatusCodes } = require("http-status-codes")

const sendMessage = async (req, res) => {
    const { userId: senderId } = req.user
    const { id: receiverId } = req.params
    const { message } = req.body

    if (!message)
        throw new CustomError.BadRequestError("Please provide message to send")

    const userExist = await User.findOne({ _id: receiverId })
    if (!userExist)
        throw new CustomError.NotFoundError("Receiver user does not exist")

    const newMessage = await Message.create({
        sender: senderId,
        receiver: receiverId,
        message,
    })

    let chat = await Chat.findOne({
        participants: { $all: [senderId, receiverId] },
    })

    if (!chat)
        chat = await Chat.create({ participants: [senderId, receiverId] })

    chat.messages.push(newMessage._id)
    await chat.save()

    res.status(StatusCodes.CREATED).json(newMessage)
}

const getMessage = async (req, res) => {
    const { userId } = req.user
    const { id: requestUserId } = req.params

    const chat = await Chat.findOne({
        participants: { $all: [userId, requestUserId] },
    }).populate({
        path: "messages",
        // populate: [
        //     { path: "sender", select: "name" },
        //     { path: "receiver", select: "name" },
        // ],
    })

    // const messages = chat ? chat : []
    if (!chat) {
        return res.status(StatusCodes.OK).json([])
    }

    const messages = chat.messages

    res.status(StatusCodes.OK).json(messages)
}

module.exports = {
    sendMessage,
    getMessage,
}
