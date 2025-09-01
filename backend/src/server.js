import express from "express";
import cookieParser from "cookie-parser";
import "dotenv/config";

import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import chatRoutes from "./routes/chat.route.js";
import { connectDB } from "./lib/db.js";



const app=express()
const PORT=process.env.Port

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true //allow frontend to send the cookies
}));

app.options('*', cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());



app.use("/api/auth",authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    connectDB();
});


