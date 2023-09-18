const express = require("express")
const AuthorizationRoutes = require("./authorization/routes")
const CharacterRoutes = require("./character/routes")
const app = express()
const http = require("http").createServer(app)
const cors = require("cors")
require('dotenv').config();
const PORT = process.env.PORT;

const mongoose = require('mongoose');
const URI = process.env.MONGO_URI;
const DB_NAME = process.env.DB_NAME;

mongoose.connect(URI, {dbName:DB_NAME}).then(()=>{
  console.log('MongoDB is connected')
})

app.use(cors())
app.use(express.json())
app.use("/", AuthorizationRoutes)
app.use("/character", CharacterRoutes)

http.listen(PORT, ()=>{
  console.log(`listening to ${PORT}`)
})
