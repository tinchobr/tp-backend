const jwt = require("jsonwebtoken");
const User = require("../models/user");
const crypto = require("crypto");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;

const login = async (req, res) => {
  const { username, pin } = req.body;

  User.findOne({ username: username })
    .then((user) => {
      if (!user) {
        return res.status(400).json({ message: "Incorrect Login" });
      }

      let token = jwt.sign(
        {
          id: user._id,
        },
        JWT_SECRET,
        { expiresIn: "1h" }
      );

      const encryptedPassword = encryptPassword(pin);

      if (user.pin !== encryptedPassword) {
        return res.status(400).json({ message: "Incorrect Login" });
      }
      return res
        .status(200)
        .json({ token, firstName: user.firstName, lastName: user.lastName });
    })
    .catch((err) => {
      return res.status(500).json({ message: err.message });
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
