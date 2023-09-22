const User = require("../models/user");
const Character = require("../models/character");

const updateUserCharacters = (req, res) => {
  const character = req.body;
  character.lastUpdate = Date.now();

  Character.findByIdAndUpdate(req.params.id, character)
    .then((updated) => {
      console.log("updated character", updated);
      return res.status(200).send();
    })
    .catch((err) => {
      console.error("Error updating character", err);
      return res.status(400).send();
    });
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
          console.log("created new character", obj);
          return res.status(201).send();
        })
        .catch((err) => {
          console.log("update user error", err);
          return res.status(400).send();
        });
    })
    .catch((err) => {
      console.log("create character error", err);
      return res.status(400).send();
    });
};

const getLastCreated = (req, res) => {
  Character.find()
    .populate(["face", "top", "bottom", "shoes"])
    .sort({ updatedAt: -1 })
    .limit(5)
    .then((characters) => {
      return res.status(200).send({ characters });
    })
    .catch((err) => {
      console.log("getAll", err);
      return res.status(400).send({ message: "find characters error" });
    });
};

const getById = (req, res) => {
  Character.findById(req.params.id)
    .populate(["face", "top", "bottom", "shoes"])
    .then((character) => {
      return res.status(200).send({ character });
    })
    .catch((err) => {
      return res.status(500).send({ message: "find character error" });
    });
};

module.exports = { updateUserCharacters, createUserCharacter, getLastCreated, getById };
