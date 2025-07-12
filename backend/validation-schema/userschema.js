import Joi from "joi";

export const userValidationSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(20).required().messages({
    "string.base": "Username must be a string",
    "string.empty": "Username is required",
    "string.min": "Username must be at least 3 characters",
    "string.max": "Username must be at most 20 characters",
    "any.required": "Username is required",
  }),

  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.email": "Invalid email format",
      "string.empty": "Email is required",
      "any.required": "Email is required",
    }),

  password: Joi.string()
    .pattern(new RegExp("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d@$!%*?&]{8,}$"))
    .required()
    .messages({
      "string.pattern.base":
        "Password must be at least 8 characters and include at least one letter and one number",
      "string.empty": "Password is required",
      "any.required": "Password is required",
    }),
});
