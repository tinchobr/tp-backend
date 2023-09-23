const User = require("../models/user");
const Character = require("../models/character");

const updateUserCharacters = async (req, res) => {
  const character = req.body;

  try {
    let result = await Character.findByIdAndUpdate(req.params.id, character, {
      returnDocument: "after",
    });
    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const createUserCharacter = (req, res) => {
  const character = req.body;

  Character.create(character)
    .then((newCharacter) => {
      User.findByIdAndUpdate(
        req.user.id,
        { $push: { characters: newCharacter._id } },
        { new: true, useFindAndModify: false }
      )
        .then((obj) => {
          return res.status(201).send(newCharacter);
        })
        .catch((err) => {
          return res.status(500).send({ message: err.message });
        });
    })
    .catch((err) => {
      return res.status(500).send({ message: err.message });
    });
};

const getLastCreated = (req, res) => {
  Character.find()
    .populate(["face", "top", "bottom", "shoes"])
    .sort({ updatedAt: -1 })
    .limit(5)
    .then((characters) => {
      return res.status(200).send(characters);
    })
    .catch((err) => {
      return res.status(500).send({ message: err.message });
    });
};

const getById = (req, res) => {
  Character.findById(req.params.id)
    .populate(["face", "top", "bottom", "shoes"])
    .then((character) => {
      return res.status(200).send(character);
    })
    .catch((err) => {
      return res.status(500).send({ message: err.message });
    });
};

module.exports = {
  updateUserCharacters,
  createUserCharacter,
  getLastCreated,
  getById,
};
