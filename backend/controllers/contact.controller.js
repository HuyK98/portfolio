const ContactMessage = require("../models/contact");
const { sendContactEmail } = require("../services/emailService");

exports.create = async (req, res, next) => {
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
        console.log("Attempting to send contact email...");
        const emailResult = await sendContactEmail({ name, email, message });

        if (!emailResult.success) {
            console.error("Email failed:", emailResult.error);
            // Still return success since message was saved
            return res.json({
                ok: true,
                id: doc._id,
                emailSent: false,
                message: "Message saved but email delivery failed. We'll contact you soon!"
            });
        }

        //return res
        res.json({ ok: true, id: doc._id, emailSent: true, message: "Message sent successfully" });

    } catch (err) {
        console.error("Contact error:", err);
        next(err);
    }
}