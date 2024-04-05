const nodemailer = require('nodemailer')

module.exports = nodemailer.createTransport({
    host: process.env.ETHEREAL_EMAIL_HOST,
    port: process.env.ETHEREAL_EMAIL_PORT,
    auth: {
        user: process.env.ETHEREAL_USER,
        pass: process.env.ETHEREAL_PASS
    }
})