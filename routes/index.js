const apiRouter = require("express").Router()
const authorizationRoutes = require("./authorization.routes")
const characterRoutes = require("./character.routes")

apiRouter.use("/", authorizationRoutes)
apiRouter.use("/character", characterRoutes)

module.exports = apiRouter