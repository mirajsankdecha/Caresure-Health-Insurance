const Joi = require("joi");

exports.createUserValidator = (req, res, next) => {
  const userSchema = Joi.object({
    id: Joi.number().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    username: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    age: Joi.number().required(),
    gender: Joi.string().valid("Male", "Female", "Other").required(),
    address: Joi.string().required(),
    city: Joi.string().required(),
    country: Joi.string().required(),
  });

  const { error } = userSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};
