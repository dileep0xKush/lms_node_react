import { Router } from "express";
import { create, findOne } from "./users.controller";

const router = Router();

router.post("/", create);

router.get("/:id", findOne);

export default router;
