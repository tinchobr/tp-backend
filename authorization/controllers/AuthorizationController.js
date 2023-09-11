const jwt = require("jsonwebtoken");
const User = require("../../users/models/users");
const crypto = require("crypto");
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

const login = (req, res) => {
  const { username, pin } = req.body;

  User.findByUsername(username)
    .then((user) => {
      if (!user) {
        console.log("not found")
        return res.status(400).json({message:"Incorrect Login"});
      }

      let token = jwt.sign(
        {
          username,
        },
        JWT_SECRET,
        { expiresIn: "1h" }
      );

      const encryptedPassword = encryptPassword(pin);
      
      if (user.pin !== encryptedPassword) {
        console.log("not match")
        return res.status(400).json({message:"Incorrect Login"});
      }

      return res.status(200).json(token);
    })
    .catch((err) => {
      console.log(err)
      return res.status(400).json({message:"Incorrect Login"});
    });
};

const encryptPassword = (pin) => {
  const hash = crypto.createHash("sha256");
  hash.update(pin.toString());
  return hash.digest("hex");
};

module.exports = {
  login,
};
