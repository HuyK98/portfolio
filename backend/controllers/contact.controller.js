const ContactMessage = require("../models/contact");
const { sendContactEmail } = require("../services/emailService");

exports.create = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        //validate input
        if (!name.trim() || !email.trim() || !message.trim()) {
            return res.status(400).json({ ok: false, error: "Missing Fields." });
        }
        if (name.length > 30 || email.length > 30) {
            return res.status(400).json({ ok: false, error: "Name  and email must be under 30 characters." })
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return res.status(400).json({ ok: false, error: "Invalid Email. Please enter correct email!" });
        }

        // tao ban ghi db
        const doc = await ContactMessage.create({ 
            name: name.trim(), 
            email: email.trim(), 
            message: message.trim(),
            ip: req.ip //store ip for rate limiting
        });

        // send email
        const emailResult = await sendContactEmail({ name, email, message });

        //return res
        res.json({ ok: true, id: doc._id, emailSent: emailResult.success });

    } catch (err) {
        next(err);
    }
}