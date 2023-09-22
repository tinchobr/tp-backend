const router = require("express").Router();
const CharacterController = require("../controllers/CharacterController");
const TokenValidationMiddleware = require("../middleware/TokenValidationMiddleware");
const SchemaValidationMiddleware = require("../middleware/SchemaValidationMiddleware");
const characterPayload = require("../validations/characterPayload");

router
  .put(
    "/:id",
    [
      TokenValidationMiddleware.verifyToken,
      SchemaValidationMiddleware.verify(characterPayload),
    ],
    CharacterController.updateUserCharacters
  )
  .post(
    "",
    [
      TokenValidationMiddleware.verifyToken,
      SchemaValidationMiddleware.verify(characterPayload),
    ],
    CharacterController.createUserCharacter
  )
  .get("", CharacterController.getLastCreated)
  .get(
    "/:id",
    [TokenValidationMiddleware.verifyToken],
    CharacterController.getById
  );

module.exports = router;
