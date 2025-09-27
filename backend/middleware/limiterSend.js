const rateLimit = require("express-rate-limit");

const contactLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, //1 hours wd
    max: 5, // limit each IP to 3 requests per hour
    message: {
        ok: false,
        error: "Too many attempts. Please try again in an hour."
    }
});

module.exports = { contactLimiter };