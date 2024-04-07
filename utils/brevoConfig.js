const nodemailer = require("nodemailer")

module.exports = nodemailer.createTransport({
    host: process.env.BREVO_EMAIL_HOST,
    port: process.env.BREVO_EMAIL_PORT,
    auth: {
        user: process.env.BREVO_USER,
        pass: process.env.BREVO_PASS,
    },
})
