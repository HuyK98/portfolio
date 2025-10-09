const sgMail = require('@sendgrid/mail');

// Set API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/**
 * Send contact form email SendGrid
 * @param {Object} contactData
 * @param {string} contactData.name
 * @param {string} contactData.email
 * @param {string} contactData.message
 * @returns {Promise<Object>}
 */
async function sendContactEmail(contactData) {
    const { name, email, message } = contactData;

    console.log(`Attempting to send email from ${name} (${email})`);

    const msg = {
        to: process.env.EMAIL_RECEIVE || process.env.SENDGRID_VERIFIED_SENDER,
        from: {
            email: process.env.SENDGRID_VERIFIED_SENDER,
            name: 'Portfolio Contact Form'
        },
        replyTo: email,
        subject: `New message from ${name} - Portfolio Contact`,
        categories: ['portfolio-contact'],
        customArgs: {
            source: 'portfolio_website'
        },
        html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #f4f4f4;">
            <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td align="center" style="padding: 40px 0;">
                        <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                            <!-- Header -->
                            <tr>
                                <td style="padding: 30px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
                                    <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-family: Arial, sans-serif;">
                                        New Contact Message
                                    </h1>
                                </td>
                            </tr>
                            
                            <!-- Content -->
                            <tr>
                                <td style="padding: 30px; font-family: Arial, sans-serif;">
                                    <p style="margin: 0 0 20px 0; color: #666; line-height: 1.6;">
                                        You have received a new message from your portfolio contact form.
                                    </p>
                                    
                                    <table style="width: 100%; border-collapse: collapse; background-color: #f8f9fa; border-radius: 8px; overflow: hidden;">
                                        <tr>
                                            <td style="padding: 20px;">
                                                <p style="margin: 0 0 10px 0;">
                                                    <strong style="color: #333;">From:</strong> 
                                                    <span style="color: #555;">${name}</span>
                                                </p>
                                                <p style="margin: 0;">
                                                    <strong style="color: #333;">Email:</strong> 
                                                    <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a>
                                                </p>
                                            </td>
                                        </tr>
                                    </table>
                                    
                                    <div style="margin: 25px 0;">
                                        <strong style="color: #333; font-size: 16px;">Message:</strong>
                                        <div style="margin-top: 10px; padding: 20px; background-color: #ffffff; border-left: 4px solid #667eea; border-radius: 4px;">
                                            <p style="margin: 0; color: #555; line-height: 1.8; white-space: pre-wrap;">${message}</p>
                                        </div>
                                    </div>
                                    
                                    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
                                        <a href="mailto:${email}" style="display: inline-block; padding: 12px 30px; background-color: #667eea; color: #ffffff; text-decoration: none; border-radius: 5px; font-weight: bold;">
                                            Reply to ${name}
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            
                            <!-- Footer -->
                            <tr>
                                <td style="padding: 20px; background-color: #f8f9fa; text-align: center; border-top: 1px solid #e0e0e0;">
                                    <p style="margin: 0; color: #999; font-size: 12px; font-family: Arial, sans-serif;">
                                        This email was sent from your portfolio contact form
                                    </p>
                                    <p style="margin: 10px 0 0 0; color: #999; font-size: 12px;">
                                        © ${new Date().getFullYear()} Portfolio. All rights reserved.
                                    </p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
        </html>
        `,
        text: `
Hello,

You have received a new contact message from your portfolio website.

Contact Details:
----------------
Name: ${name}
Email: ${email}

Message:
----------------
${message}

---
This email was sent from your portfolio contact form.
To reply, simply respond to this email.
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