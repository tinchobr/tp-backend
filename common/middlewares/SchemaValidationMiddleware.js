const Ajv = require("ajv").default,
  AJV_OPTS = { allErrors: true };

const verify = (schema) => {
  if (!schema) {
    throw new Error("Schema not provided");
  }

  return (req, res, next) => {
    const { body } = req;
    const ajv = new Ajv(AJV_OPTS);
    const validate = ajv.compile(schema);
    const isValid = validate(body);

    if (isValid) {
      return next();
    }

    return res.status(400).send({
      message: `Invalid Payload: ${ajv.errorsText(validate.errors)}`,
    });
  };
};

module.exports = {
  verify,
};
