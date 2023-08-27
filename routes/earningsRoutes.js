import express from "express";
const router = express.Router();

import {
  createEarning,
  deleteEarning,
  getAllEarnings,
  getEarning,
  updateEarning,
  showStats,
} from "../controllers/earningController.js";

router.route("/").post(createEarning).get(getAllEarnings);
router.route("/stats").get(showStats);
router.route("/:id").get(getEarning).patch(updateEarning).delete(deleteEarning);

export default router;
