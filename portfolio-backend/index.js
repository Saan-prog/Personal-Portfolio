import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from "dotenv";
import path from 'path';
import { fileURLToPath } from "url";
import submitRouter from "./routes/submitRouter.js";

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middilewares
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173", "https://personal-portfolio-1-anbv.onrender.com"],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));
app.use(express.urlencoded({extended: true}));

// EJS setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// static
app.use(express.static("public"));

// Routes
app.use("/api", submitRouter);

// Test Route
app.get("/", (req, res) => {
    res.send(" API running..");
});

// mongodb
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch((error) => console.log(error));

// server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});

