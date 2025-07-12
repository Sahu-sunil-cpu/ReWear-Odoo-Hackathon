import express from 'express';
import { googleCallback, login, logout, refreshToken, signup } from '../controllers/auth.controllers.js';
import { User } from '../models/user.models.js';
import { passport } from '../config/passport.js'
import { protectRoute } from '../middleware/protectRoute.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);
router.post('/refresh-token', refreshToken);
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'], failureRedirect: '/api/auth/google/error' }));

router.get('/google/callback', (req, res, next) => {
    passport.authenticate('google', { session: false }, (err, user, info) => {
        if (err) {
            console.log("passport Error :: ", err);
            return res.redirect(`/api/auth/google/error`);
        }
        if (!user) {
            return res.redirect(`/api/auth/google/error`);
        }
        req.user = user;
        next();
    })(req, res, next);
}, googleCallback);


// specially to handle error in google auth
router.get('/google/error', (req, res) => {
    return res.status(400).json({ error: "Google auth failed" });
});

export default router;