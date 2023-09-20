const User = require("../models/user");
const Character = require("../models/character");

const updateUserCharacters = (req, res) => {
  const character = req.body;
  character.lastUpdate = Date.now()

  Character.findByIdAndUpdate(req.params.id, character)
    .then((updated) => {
      console.log("actualizazdo? ", updated);
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
          console.log("create error", err);
          return res.status(400).send();
        });
    })
    .catch((err) => {
      console.log("create error", err);
      return res.status(400).send();
    });
};

module.exports = { updateUserCharacters, createUserCharacter };
