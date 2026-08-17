import { Router } from "express";
import {
  fetchUsers,
  updateUserStatus,
} from "../controllers/admin.controller.js";
import { adminAuth } from "../middleware/adminAuth.js";

const router = Router();

router.use(adminAuth);
router.get("/users", fetchUsers);
router.put("/users/:id/status", updateUserStatus);

export default router;
