import express from "express";
const router = express.Router();
import { submitMessage } from "../controllers/submit.js";


router.post("/submit", submitMessage );

export default router;