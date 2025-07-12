import express from "express";
import Router from "express";
import {auth} from "../middleware/protectRoute.js";
import adminMiddleware from "../middleware/adminMiddleware.js";
import { getAllUsers, getPlatformLogs, toggleUserBan } from "../controllers/admin.controllers.js";


const router = Router();

// Admin must be authenticated + have role "admin"
router.get("/users", auth, adminMiddleware, getAllUsers);
router.put("/users/:id/ban", auth, adminMiddleware, toggleUserBan);
router.get("/logs", auth, adminMiddleware, getPlatformLogs);

export default router;