import Income from "../models/IncomeModel.js";
import { StatusCodes } from "http-status-codes";

const getAllIncomes = async (req, res) => {
  const incomes = await Income.find({ createdBy: req.user.userId });
  res.status(StatusCodes.OK).json({ incomes });
};

const createIncome = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const income = await Income.create(req.body);
  res.status(StatusCodes.CREATED).json({ income });
};

const getIncome = async (req, res) => {
  const income = await Income.findById(req.params.id);
  res.status(StatusCodes.OK).json({ income });
};

const updateIncome = async (req, res) => {
  const updatedIncome = await Income.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res
    .status(StatusCodes.OK)
    .json({ msg: "income modified", income: updatedIncome });
};

const deleteIncome = async (req, res) => {
  const removedIncome = await Income.findByIdAndDelete(req.params.id);

  res
    .status(StatusCodes.OK)
    .json({ msg: "income deleted", income: removedIncome });
};

export { createIncome, deleteIncome, getAllIncomes, getIncome, updateIncome };
