const apiRouter = require("express").Router()
const authorizationRoutes = require("./authorization.routes")
const characterRoutes = require("./character.routes")
const userRoutes = require("./user.routes")
const characterizationRoutes = require("./characterization.routes")

apiRouter.use("/", authorizationRoutes)
apiRouter.use("/characters", characterRoutes)
apiRouter.use("/users", userRoutes)
apiRouter.use("/characterizations", characterizationRoutes)

module.exports = apiRouter