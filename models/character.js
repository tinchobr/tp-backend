const mongoose = require("mongoose")
const Schema = mongoose.Schema
require("./characterization")

const characterSchema = new Schema({
  name: { type: String, required: true },
  face: {
    type: Schema.Types.ObjectId,
    ref: "characterization",
  },
  top: {
    type: Schema.Types.ObjectId,
    ref: "characterization",
  },
  bottom: {
    type: Schema.Types.ObjectId,
    ref: "characterization",
  },
  shoes: {
    type: Schema.Types.ObjectId,
    ref: "characterization",
  },
}, { timestamps: true } ).set('toJSON',{
  transform: (document, object) => {
      delete object.__v;
  }
})

const Character = mongoose.model("character", characterSchema)

module.exports = Character