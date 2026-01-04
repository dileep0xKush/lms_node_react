import { Router } from "express";
import {
  register,
  login,
  forgotPassword,
  resetPassword,
  me,
} from "./auth.controller";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.get("/me", me);
export default router;
