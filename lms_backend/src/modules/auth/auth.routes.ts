import { Router } from "express";
import {
  register,
  login,
  forgotPassword,
  resetPassword,
  logout,
  me,
} from "./auth.controller";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.post("/logout", logout);
router.get("/me", me);
export default router;
