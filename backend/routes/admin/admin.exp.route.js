const router = require("express").Router();
const { verifyToken, isAdmin } = require("../../middleware/auth");
const ah = require("../../middleware/asyncHandler");
const ExpController = require("../../controllers/experience.controller");

router.use(verifyToken, isAdmin);

// them moi (admin)
router.post("/", ah(ExpController.create));

// cap nhat (admin)
router.put("/:id", ah(ExpController.update));

// xoa (admin)
router.delete("/:id", ah(ExpController.remove));

module.exports = router;