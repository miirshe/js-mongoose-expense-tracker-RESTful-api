import Joi from "joi";

export function validateExpense(req, res, next) {
  const { amount, startDate, endDate, description, payment, categoryId } =
    req.body;

  const validateSchema = Joi.object({
    amount: Joi.number().min(1).required(),
    startDate: Joi.date().iso().required(),
    endDate: Joi.date().iso().required(),
    description: Joi.string().trim().optional(),
    payment: Joi.string().optional(),
    categoryId: Joi.string().required(),
  });

  const { error } = validateSchema.validate({
    amount,
    startDate,
    endDate,
    description,
    payment,
    categoryId,
  });
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
}
