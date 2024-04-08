const User = require("../models/User")
const { StatusCodes } = require("http-status-codes")
const CustomError = require("../errors")
const { checkPermissions } = require("../utils")
const { createTokenUser, attachCookiesToResponse } = require("../utils")

const getAllUsers = async (req, res) => {
    const users = await User.find({ role: "user" }).select("-password")
    res.status(StatusCodes.OK).json({ users })
}

const getSingleUser = async (req, res) => {
    const user = await User.findOne({ _id: req.params.id }).select("-password")
    // actually this user checking condition is not needed, it has been handled
    // in the error-handler.js
    if (!user) {
        throw new CustomError.NotFoundError(`No user with id: ${req.params.id}`)
    }

    checkPermissions({ requestUser: req.user, resourceUserId: user._id })
    res.status(StatusCodes.OK).json({ user })
}

const showCurrentUser = async (req, res) => {
    res.status(StatusCodes.OK).json({ user: req.user })
}

const updateUser = async (req, res) => {
    const { name, email } = req.body
    if (!name || !email)
        throw new CustomError.BadRequestError("Please provide all values")

    const user = await User.findOne({ _id: req.user.userId })

    user.name = name
    user.email = email

    await user.save()

    const tokenUser = createTokenUser(user)
    attachCookiesToResponse({ res, user: tokenUser })

    res.status(StatusCodes.OK).json({ user: tokenUser })
}

const updateUserPassword = async (req, res) => {
    const { oldPassword, newPassword } = req.body
    if (!oldPassword || !newPassword)
        throw new CustomError.BadRequestError(
            "Please provide your current password and new one"
        )

    const user = await User.findOne({ _id: req.user.userId })

    const isPasswordCorrect = await user.comparePassword(oldPassword)
    if (!isPasswordCorrect)
        throw new CustomError.UnauthenticatedError("Invalid Credentials")

    user.password = newPassword

    await user.save()

    res.status(StatusCodes.OK).json({ msg: "Success! Password Updated" })
}

const getAllUsersExceptMe = async (req, res) => {
    const users = await User.find({ _id: { $ne: req.user.userId } }).select(
        "-password -isVerified -verificationToken"
    )

    res.status(StatusCodes.OK).json({ users })
}

module.exports = {
    getAllUsers,
    getSingleUser,
    showCurrentUser,
    updateUser,
    updateUserPassword,
    getAllUsersExceptMe,
}
