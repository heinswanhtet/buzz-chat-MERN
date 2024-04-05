const { mg, DOMAIN } = require('./mailgunConfig')
const transporter = require('./etherealConfig')

const sendEmail = async ({ to, subject, html }) => {
    const emailDetails = {
        from: 'Wonderful Camping Store 🏕️ <camping-gears-store@mail.com>',
        to,
        subject,
        html
    }

    if (process.env.MAILING_OPTION === 'ethereal')
        return transporter.sendMail(emailDetails)

    if (process.env.MAILING_OPTION === 'mailgun')
        return mg.messages.create(DOMAIN, emailDetails)
}

module.exports = sendEmail