const router = require("express").Router();
const UserController = require("../controllers/UserController");
const TokenValidationMiddleware = require("../middleware/TokenValidationMiddleware");

router.get(
  "/characters",
  [TokenValidationMiddleware.verifyToken],
  UserController.getUserCharacters
);

module.exports = router;
