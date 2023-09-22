const User = require("../models/user");

const getUserCharacters = (req, res) => {
  User.findById(req.params.id)
    .populate("characters")
    .then((response) => {
      return res.status(200).send(response.characters);
    })
    .catch((err) => {
      return res.status(500).send({ message: "get characters of user error" });
    });
};

module.exports = { getUserCharacters };
