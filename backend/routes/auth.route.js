const router = require('express').Router();
const ah = require("../middleware/asyncHandler");
const ctl = require("../controllers/auth.controller");

// register
router.post('/register', ah(ctl.register));

//login
router.post('/login', ah(ctl.login));

module.exports = router;