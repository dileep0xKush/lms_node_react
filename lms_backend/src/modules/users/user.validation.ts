import * as yup from 'yup';

export const userIdParamSchema = yup
  .object({
    id: yup.string().trim().required(),
  })
  .required();

export const createUserSchema = yup
  .object({
    name: yup.string().trim().min(2).max(100).required(),
    email: yup.string().trim().email().required(),
    password: yup.string().min(6).max(100).required(),
    roleId: yup.string().trim().optional(),
  })
  .required();

export const updateUserSchema = yup
  .object({
    name: yup.string().trim().min(2).max(100).optional(),
    email: yup.string().trim().email().optional(),
    password: yup.string().min(6).max(100).optional(),
    roleId: yup.string().trim().optional(),
  })
  .required();

export const updateUserStatusSchema = yup
  .object({
    isActive: yup.boolean().required(),
  })
  .required();
