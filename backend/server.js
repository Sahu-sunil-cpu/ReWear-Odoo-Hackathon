import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from "cors";
import { connectDB } from './db/connectDB.js';
import authRoutes from './routes/auth.routes.js';
import notesRoute from './routes/notes.routes.js'
import { protectRoute } from './middleware/protectRoute.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());


app.use('/api/auth', authRoutes);
app.use('/api/notes',protectRoute,notesRoute);

// app.use((err, req, res, next) => {
//     console.log("Something went wrong : ", err);
//     return res.status(500).json({ error: err });
// })

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

 //   connectDB();

    console.log("server is listening on port :", PORT);
})