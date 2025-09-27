const router = require("express").Router();
const ah = require("../middleware/asyncHandler");
const ctl = require("../controllers/experience.controller");

router.get("/", ah(ctl.list));

module.exports = router;