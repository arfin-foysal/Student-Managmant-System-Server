const joi = require("joi");

const userValidateSchema = joi.object({
  name: joi.string().min(3).max(30).required(),
  email: joi.string().required().email({ minDomainSegments: 2 }),
  password: joi.string().min(2).required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
});

module.exports = {
  userValidateSchema,
};
