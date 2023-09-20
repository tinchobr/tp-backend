module.exports = {
  type: 'object',
  properties: {
    username: {
      type: 'string'
    },
    pin: {
      type: 'integer'
    }
  },
  required: [
    'username',
    'pin'
  ],
  additionalProperties: false
};