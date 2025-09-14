import express from "express";
import { createLead, getLeadsList } from "../controllers/leadController.js";

const router = express.Router();

router.post("/", createLead);
router.get("/", getLeadsList);

export default router;
