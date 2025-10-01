const router = require("express").Router();
const { verifyToken, isAdmin } = require("../../middleware/auth");
const ah = require("../../middleware/asyncHandler");
const skillController = require("../../controllers/skill.controller");

router.use(verifyToken, isAdmin);

// tao(them moi) - chi admin moi duoc phep
router.post("/", ah(skillController.create));

// sua(chinh sua) - chi admin moi duoc phep
router.put("/:id", ah(skillController.update));

// xoa - chi admin moi duoc phep
router.delete("/:id", ah(skillController.remove));

module.exports = router;