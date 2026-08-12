import express from "express";
import { getOffers } from "../controllers/offerController.js";

const router = express.Router();

router.get("/", getOffers);

export default router;
