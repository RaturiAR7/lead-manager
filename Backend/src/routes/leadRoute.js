import express from "express";
import {
  createLead,
  getLeadsList,
  updateLead,
} from "../controllers/leadController.js";

const router = express.Router();

router.post("/", createLead);
router.get("/", getLeadsList);
router.put("/:id", updateLead);

export default router;
