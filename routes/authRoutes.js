const express = require("express")
const router = express.Router()

const { authenticateUser } = require("../middleware/authentication")
const {
    register,
    login,
    logout,
    verifyEmail,
    forgotPassword,
    resetPassword,
} = require("../controllers/authController")

const rateLimiter = require("express-rate-limit")

const apiLimiter = rateLimiter({
    windowMs: 10 * 60 * 1000,
    max: 5,
    message: {
        msg: "Too many requests from this IP, please try again after 10 minutes",
    },
})

router.route("/register").post(apiLimiter, register)
router.route("/login").post(apiLimiter, login)
router.route("/logout").delete(authenticateUser, logout)
router.route("/verify-email").post(verifyEmail)
router.route("/forgot-password").post(forgotPassword)
router.route("/reset-password").post(resetPassword)

module.exports = router
