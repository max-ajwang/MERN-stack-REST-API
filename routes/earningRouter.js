import express from "express";
const router = express.Router();

import {
  createEarning,
  deleteEarning,
  getAllEarnings,
  getEarning,
  updateEarning,
} from "../controllers/earningController.js";

import {
  validateEarningInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";

router.route("/").get(getAllEarnings).post(validateEarningInput, createEarning);
router
  .route("/:id")
  .get(validateIdParam, getEarning)
  .patch(validateEarningInput, validateIdParam, updateEarning)
  .delete(validateIdParam, deleteEarning);

export default router;
