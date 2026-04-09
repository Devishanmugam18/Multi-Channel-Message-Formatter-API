import express from "express";
import { formatMessage } from "../controllers/messageController.js";

const router = express.Router();

router.post("/format-message", formatMessage);

export default router;
