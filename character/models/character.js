const mongoose = require("mongoose")
const Schema = mongoose.Schema

const characterSchema = new Schema({
  name: { type: String, required: true },
  face: { type: String, required: true },
  top: { type: String, required: true },
  bottom: { type: String, required: true },
  shoes: { type: String, required: true },
  lastUpdate: { type: Date, default: Date.now }
})

const Character = mongoose.model("character", characterSchema)

module.exports = Character