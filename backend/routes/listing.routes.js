import express from "express";
import Router from 'express';
import {auth} from "../middleware/protectRoute.js"; // assumes JWT auth
import { createListing, deleteListing, getAllListings, getListingById, updateListing } from "../controllers/listing.controller.js";

const router = Router();

router.post("/", auth, createListing);

router.get("/", getAllListings);

router.get("/:id", getListingById);

router.put("/:id", auth, updateListing);

router.delete("/:id", auth, deleteListing);

export default router;