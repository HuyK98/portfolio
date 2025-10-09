const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/**
 @param {Object} contactData
 @param {string} contactData.name
 @param {string} contactData.email
 @param {string} contactData.message 
 @returns {Promise<Object>} 
 */
async function sendContactEmail(contactData) {
    const { name, email, message } = contactData;

    console.log(`Attempting to send email from ${name} (${email})`);

    const msg = {
        to: process.env.EMAIL_RECEIVE || process.env.SENDGRID_VERIFIED_SENDER,
        from: process.env.SENDGRID_VERIFIED_SENDER,
        replyTo: email,
        subject: `Portfolio Contact: ${name}`,
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
                New Contact Message
            </h2>
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
                <p style="margin: 10px 0;">
                    <strong style="color: #555;">From:</strong> 
                    <span style="color: #333;">${name}</span>
                </p>
                <p style="margin: 10px 0;">
                    <strong style="color: #555;">Email:</strong> 
                    <a href="mailto:${email}" style="color: #007bff;">${email}</a>
                </p>
            </div>
            <div style="margin: 20px 0;">
                <strong style="color: #555;">Message:</strong>
                <div style="background-color: #fff; padding: 15px; border-left: 3px solid #007bff; margin-top: 10px;">
                    ${message.replace(/\n/g, '<br>')}
                </div>
            </div>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
            <p style="color: #888; font-size: 12px; text-align: center;">
                Sent from your portfolio contact form
            </p>
        </div>
        `,
        text: `
New Contact Message

From: ${name}
Email: ${email}

Message:
${message}

---
Sent from your portfolio contact form
        `.trim()
    };

    try {
        const response = await sgMail.send(msg);
        console.log('Email sent successfully via SendGrid');
        console.log('Response status:', response[0].statusCode);
        return {
            success: true,
            messageId: response[0].headers['x-message-id']
        };
    } catch (error) {
        console.error('SendGrid Error:', error);

        // Log detailed error info
        if (error.response) {
            console.error('Error body:', error.response.body);
        }

        return {
            success: false,
            error: error.message
        };
    }
}

module.exports = { sendContactEmail };