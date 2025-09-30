const router = require("express").Router();
const { verifyToken, isAdmin } = require("../../middleware/auth");
const ah = require("../../middleware/asyncHandler");
const projectController = require("../../controllers/project.controller");

// ap toan bo middleware cho tat ca cac route ben duoi
router.use(verifyToken, isAdmin);

// tao moi
router.post("/", ah(projectController.create));

// cap nhat
router.put("/:id", ah(projectController.update));

// xoa
router.delete("/:id", ah(projectController.remove));

module.exports = router;