
import Joi from "joi";

export const userValidationSchema = Joi.object({
  username: Joi.string().min(2).max(50).required(),

  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),

  password: Joi.string().min(6).max(128).required(),

  role: Joi.string().valid("user", "admin"),

  profileImage: Joi.string().uri().optional(),

  points: Joi.number().min(0).optional(),

  bio: Joi.string().max(500).optional(),

  location: Joi.string().max(100).optional(),

  preferences: Joi.object({
    size: Joi.string().optional(),
    gender: Joi.string().optional(),
    style: Joi.array().items(Joi.string()).optional(),
  }).optional(),

  status: Joi.string().valid("active", "banned", "deleted").optional(),
});
