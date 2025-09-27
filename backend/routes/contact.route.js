const router = require("express").Router();
const ah = require("../middleware/asyncHandler");
const ctl = require("../controllers/contact.controller");
const { contactLimiter } = require("../middleware/limiterSend");

router.post("/", contactLimiter, ah(ctl.create));

module.exports = router;