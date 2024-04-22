const Joi = require("joi");

const addTask = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().trim(),
    phone: Joi.string().required().trim(),
    image:Joi.string().required(),
  }),
};
module.exports = {
  addTask,
};
