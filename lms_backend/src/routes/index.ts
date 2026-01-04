import { Router } from "express";
import userRoutes from "../modules/users/user.routes";
import authRoutes from "../modules/auth/auth.routes";
import roleRoutes from "../modules/roles/role.routes";
import permissionRoutes from "../modules/permissions/permission.routes";

const router = Router();

router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/roles", roleRoutes);
router.use("/permissions", permissionRoutes);


export default router;
