const router = require("express").Router()
const AuthorizationController = require("../controllers/AuthorizationController");
const loginPayload = require("../validations/loginPayload");
const SchemaValidationMiddleware = require("../middleware/SchemaValidationMiddleware")

router.post(
  "/login",
  [SchemaValidationMiddleware.verify(loginPayload)],
  AuthorizationController.login
);

module.exports = router;