import Joi from "joi";

export function validateUserRegister(req, res, next) {
  const { name, email, password } = req.body;

  const validateSchema = Joi.object({
    name: Joi.string().min(5).trim().required(),
    email: Joi.string().email().trim().length().required(),
    password: Joi.string().min(8).max(12).required(),
  });

  const { error } = validateSchema.validate({ name, email, password });
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
}

export function validateUserLogin(req, res, next) {
  const { email, password } = req.body;
  const validateSchema = Joi.object({
    email: Joi.string().email().trim().required(),
    password: Joi.string().min(7).max(12).required(),
  });
  const { error } = validateSchema.validate({ email, password });
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
}
