import * as yup from 'yup';

export const roleIdParamSchema = yup
  .object({
    id: yup.string().trim().required(),
  })
  .required();

export const createRoleSchema = yup
  .object({
    name: yup.string().trim().min(2).max(100).required(),
    description: yup.string().trim().max(255).optional(),
  })
  .required();

export const updateRoleSchema = yup
  .object({
    name: yup.string().trim().min(2).max(100).optional(),
    description: yup.string().trim().max(255).optional(),
  })
  .required();
