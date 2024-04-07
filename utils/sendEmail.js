const { mg, DOMAIN } = require("./mailgunConfig")
const etherealTransporter = require("./etherealConfig")
const brevoTransporter = require("./brevoConfig")

const sendEmail = async ({ to, subject, html }) => {
    const emailDetails = {
        from: "Buzz Chat 💬 <buzz-chat@mail.com>",
        to,
        subject,
        html,
    }

    if (process.env.MAILING_OPTION === "ethereal")
        return etherealTransporter.sendMail(emailDetails)

    if (process.env.MAILING_OPTION === "mailgun")
        return mg.messages.create(DOMAIN, emailDetails)

    if (process.env.MAILING_OPTION === "brevo") {
        return brevoTransporter.sendMail(emailDetails)
    }
}

module.exports = sendEmail
