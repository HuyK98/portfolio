// gom tất cả router con
const router = require("express").Router();

// project
router.use("/projects", require("../routes/project.route"));

// skill
router.use("/skills", require("../routes/skill.route"));
// router.use("/exp", require("./experience.route"));
// router.use("/contact", require("./contact.route"));

module.exports = router;
