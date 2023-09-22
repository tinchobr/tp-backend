module.exports = {
  type: "object",
  properties: {
    name: { type: "string" },
    face: { type: "string" },
    top: { type: "string" },
    bottom: { type: "string" },
    shoes: { type: "string" },
  },
  required: ["name", "face", "top", "bottom", "shoes"],
  additionalProperties: false,
};
