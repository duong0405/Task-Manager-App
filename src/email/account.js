const sgMail = require('@sendgrid/mail')
const sendgridAPIkey = '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'

sgMail.setApiKey(sendgridAPIkey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'phuongx31@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'phuongx31@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}