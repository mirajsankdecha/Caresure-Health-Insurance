const express = require("express");
const adminController = require("../controllers/adminController");
const adminValidator = require("../validators/adminValidators");

const router = express.Router();

router.post(
  "/create",
  adminValidator.createAdminValidator,
  adminController.createAdmin
);
router.get("/getAll", adminController.getAllAdmins);
router.get("/:id", adminController.getAdminById);
router.delete("/:id", adminController.deleteAdminById);
router.put(
  "/:id",
  adminValidator.updateAdminValidator,
  adminController.updateAdminById
);

module.exports = router;
