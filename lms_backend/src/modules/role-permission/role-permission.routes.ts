import { Router } from "express";
import { create, remove, findAll, findOne } from "./role-permission.controller";

const router = Router();

router.post("/", create);
router.delete("/", remove);
router.get("/role/:roleId", findAll);
router.get("/permission/:permissionId", findOne);

export default router;
