import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/auth.routes.js";
import orderRoutes from "./routes/order.routes.js"
import adminRoutes from "./routes/admin.routes.js"
import  listingRoutes from "./routes/listing.routes.js";





dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5174", // your frontend URL
    credentials: true, // allow cookies
  })
);

app.get('/',async (req,res) => {
    return res.json({error:"root origin"});
})
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/order", orderRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/listings", listingRoutes);




// app.use((err, req, res, next) => {
//     console.log("Something went wrong : ", err);
//     return res.status(500).json({ error: err });
// })

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  connectDB();
  console.log("server is listening on port :", PORT);
});
