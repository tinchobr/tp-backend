const router = require("express").Router()
const AuthorizationController = require("./controllers/AuthorizationController");
const loginPayload = require("./schemas/loginPayload");
const SchemaValidationMiddleware = require("../common/middlewares/SchemaValidationMiddleware")

router.post(
  "/login",
  [SchemaValidationMiddleware.verify(loginPayload)],
  AuthorizationController.login
);

module.exports = router;