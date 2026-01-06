import * as yup from "yup";

export const registerSchema = yup
  .object({
    name: yup.string().trim().min(2).max(100).required(),
    email: yup.string().trim().email().required(),
    password: yup.string().min(6).max(100).required(),
  })
  .required();

export const loginSchema = yup
  .object({
    email: yup.string().trim().email().required(),
    password: yup.string().required(),
  })
  .required();

export const forgotPasswordSchema = yup
  .object({
    email: yup.string().trim().email().required(),
  })
  .required();

export const resetPasswordSchema = yup
  .object({
    token: yup.string().required(),
    password: yup.string().min(6).max(100).required(),
  })
  .required();
