import express from "express";
const router = express.Router();

import {
  createIncome,
  deleteIncome,
  getAllIncomes,
  getIncome,
  updateIncome,
} from "../controllers/incomeController.js";

import {
  validateIncomeInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";

router.route("/").get(getAllIncomes).post(validateIncomeInput, createIncome);
router
  .route("/:id")
  .get(validateIdParam, getIncome)
  .patch(validateIncomeInput, validateIdParam, updateIncome)
  .delete(validateIdParam, deleteIncome);

export default router;
