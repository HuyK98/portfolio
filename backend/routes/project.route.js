const router = require("express").Router();
const ah = require("../middleware/asyncHandler");
const ctl = require("../controllers/project.controller");

router.get("/", ah(ctl.list));
module.exports = router;
