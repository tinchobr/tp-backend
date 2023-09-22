const router = require("express").Router();
const CharacterizationController = require("../controllers/CharacterizationController");
const TokenValidationMiddleware = require("../middleware/TokenValidationMiddleware");

router.get(
  "",
  [TokenValidationMiddleware.verifyToken],
  CharacterizationController.getAll
);

module.exports = router;