const router = require("express").Router();
const CharacterController = require("../controllers/CharacterController");
const TokenValidationMiddleware = require("../middleware/TokenValidationMiddleware");

router.put(
  "/:id",
  [TokenValidationMiddleware.verifyToken],
  CharacterController.updateUserCharacters
);

router.post(
  "",
  [TokenValidationMiddleware.verifyToken],
  CharacterController.createUserCharacter
);

module.exports = router;