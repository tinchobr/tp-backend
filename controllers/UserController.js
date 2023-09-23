const User = require("../models/user");

const getUserCharacters = (req, res) => {
  User.findById(req.params.id)
    .populate({
      path: "characters",
      populate: [
        { path: "face" },
        { path: "top" },
        { path: "bottom" },
        { path: "shoes" },
      ],
    })
    .then((response) => {
      return res.status(200).send(response.characters);
    })
    .catch((err) => {
      return res.status(500).send({ message: err.message });
    });
};

module.exports = { getUserCharacters };
