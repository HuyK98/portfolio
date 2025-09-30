// gom tất cả router con
const router = require("express").Router();

// project
router.use("/projects", require("../routes/project.route"));

// skill
router.use("/skills", require("../routes/skill.route"));

// exp
router.use("/exp", require("../routes/experience.route"));

// contact
router.use("/contact", require("../routes/contact.route"));

// auth
router.use("/auth", require("../routes/auth.route"));

// admin project
router.use("/admin/projects", require("../routes/admin/admin.project.route"));

module.exports = router;
