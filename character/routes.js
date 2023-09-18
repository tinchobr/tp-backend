const router = require("express").Router();
const CharacterController = require("./controllers/CharacterController");
const TokenValidationMiddleware = require("../common/middlewares/TokenValidationMiddleware");

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