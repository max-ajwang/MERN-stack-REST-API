import express from "express";
const router = express.Router();

import {
  createIncome,
  deleteIncome,
  getAllIncomes,
  getIncome,
  updateIncome,
  showStats,
} from "../controllers/incomeController.js";

import {
  validateIncomeInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";
import { checkForTestUser } from "../middleware/authMiddleware.js";

router
  .route("/")
  .get(getAllIncomes)
  .post(checkForTestUser, validateIncomeInput, createIncome);

router.route("/stats").get(showStats);

router
  .route("/:id")
  .get(validateIdParam, getIncome)
  .patch(checkForTestUser, validateIncomeInput, validateIdParam, updateIncome)
  .delete(checkForTestUser, validateIdParam, deleteIncome);

export default router;
