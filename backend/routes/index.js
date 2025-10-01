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

// admin
router.use("/admin/projects", require("../routes/admin/admin.project.route"));
router.use("/admin/skills", require("../routes/admin/admin.skill.route"));
router.use("/admin/exp", require("../routes/admin/admin.exp.route"));

module.exports = router;
