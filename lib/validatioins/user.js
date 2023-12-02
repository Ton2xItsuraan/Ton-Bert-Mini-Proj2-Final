import Joi from 'joi';

export const UserValidation = Joi.object({
  profile_photo: Joi.string().uri().required(),
  name: Joi.string().min(3).max(30),
  username: Joi.string().min(3).max(30),
  bio: Joi.string().min(3).max(30),
});