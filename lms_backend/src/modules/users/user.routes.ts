import { Router } from "express";
import { userController } from "./users.controller";

const router = Router();

// POST /api/users
router.post("/", userController);

export default router;
