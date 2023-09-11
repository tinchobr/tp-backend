// const mongoose = require('../../common/services/mongoose.service').mongoose;
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    username: String,
    pin: String,
    //outfits: [outfitSchema]
});

const outfitSchema = new Schema({
  character: String,
  top: String,
  bottom: String,
  shoes: String,
});

const User = mongoose.model('user', userSchema)

exports.findByUsername = (username) => {
  return User.findOne({username: username});
};