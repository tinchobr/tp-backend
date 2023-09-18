const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterizationSchema = new Schema({
  type: { type: String, required: true },
  url: { type: String, required: true }
})

const Characterization = mongoose.model("characterization", characterizationSchema)

module.exports = Characterization