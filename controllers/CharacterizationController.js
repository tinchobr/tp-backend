const Characterization = require("../models/characterization");

const getAll = (req, res) => {
  Characterization.find()
    .skip(req.query.skip)
    .limit(req.query.limit)
    .then((characterizations) => {
      return res.status(200).send(characterizations);
    })
    .catch((err) => {
      return res
        .status(500)
        .send({ message: "get all characterization error" });
    });
};

module.exports = { getAll };
