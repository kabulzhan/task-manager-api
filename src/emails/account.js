const sgMail = require("@sendgrid/mail");;
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "yourfenix001@gmail.com",
        subject: "Thanks for joining in",
        text: `Welcome to the app, ${name}. Let me know how you get with the app.`
    })
}

const sendExitEmail = (email, name) =>{
    sgMail.send({
        to: email,
        from: "yourfenix001@gmail.com",
        subject: `${name}, we're sorry to hear you leaving`,
        text: "Your account has been removed. Please reply to this mail by telling why you're leaving."
    })
}

module.exports = {
    sendWelcomeEmail,
    sendExitEmail
}