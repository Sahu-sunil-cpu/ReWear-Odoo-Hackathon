import passport from "passport";
import googleOauth20 from 'passport-google-oauth20';
import  User  from "../models/user.models.js";


const googleStategy = googleOauth20.Strategy;


passport.use(new googleStategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:5000/api/auth/google/callback',
}, async (accessToken, refreshToken, profile, done) => {

    try {
        // console.log("Profile : ",profile._json);
        return done(null, profile._json);
        return done(new Error("Error occur in passport config"), null);
    } catch (error) {
        return done(error, null);
    }
}

));

export { passport }