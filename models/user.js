const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("./character");

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  pin: { type: String, required: true },
  characters: [{ type: Schema.Types.ObjectId, ref: "character" }],
});

const User = mongoose.model("user", userSchema);

module.exports = User;
