import Joi from "joi";

export function validateCategory(req, res, next) {
  const { name, budget } = req.body;
  const validateSchema = Joi.object({
    name: Joi.string().trim().min(4).required(),
    budget: Joi.number().min(1).optional(),
  });

  const { error } = validateSchema.validate({ name, budget });

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
}
