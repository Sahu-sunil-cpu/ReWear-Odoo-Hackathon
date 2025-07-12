import Router from 'express';
import {auth} from "../middleware/protectRoute.js";
import express from "express"
import { createOrder, getMyOrders, getOrdersBySeller } from '../controllers/order.controllers.js';

const router = Router();

router.get("/my-orders", auth, getMyOrders);


router.get("/my-sold-orders", auth, getOrdersBySeller);


router.post("/", auth, createOrder);

export default router;