import express from "express";
import { calculates } from "../Controller/Calculation.js";
const router = express.Router();

router.post("/calculate", calculates);

export default router;
