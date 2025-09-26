const nodemailer = require("nodemailer");

// tạo transport với Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// function gửi email
async function sendContactEmail(contactData) {
    const { name, email, message } = contactData;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, //gửi về email của bạn
        subject: `Portfolio Contact: ${name}`,
        html: `
        <h3>New Contact Message</h3>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error) {
        console.error("Email error: ", error);
        return { success: false, error: error.message }
    }
}

module.exports = { sendContactEmail };