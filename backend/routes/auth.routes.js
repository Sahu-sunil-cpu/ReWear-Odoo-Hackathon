import express from 'express';
import { login, logout, refreshToken, signup } from '../controllers/auth.controllers.js';
import { login, logout, profile, refreshToken, signup } from '../controllers/auth.controllers.js';
// import { User } from '../models/user.models.js';
// import { passport } from '../config/passport.js'
import { protectRoute } from '../middleware/protectRoute.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);
router.get('/profile', protectRoute, profile);
router.post('/refresh-token', refreshToken);

export default router;