import Income from "../models/IncomeModel.js";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
import day from "dayjs";

export const getAllIncomes = async (req, res) => {
  const { search, incomeStatus, incomeType, sort } = req.query;

  const queryObject = {
    createdBy: req.user.userId,
  };
  if (search) {
    queryObject.$or = [
      { position: { $regex: search, $options: "i" } },
      { company: { $regex: search, $options: "i" } },
    ];
  }

  if (incomeStatus && incomeStatus !== "all") {
    queryObject.incomeStatus = incomeStatus;
  }
  if (incomeType && incomeType !== "all") {
    queryObject.incomeType = incomeType;
  }

  const sortOptions = {
    newest: "-createdAt",
    oldest: "createdAt",
    "a-z": "position",
    "z-a": "-position",
  };

  const sortKey = sortOptions[sort] || sortOptions.newest;

  // setup pagination

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const incomes = await Income.find(queryObject)
    .sort(sortKey)
    .skip(skip)
    .limit(limit);

  const totalIncomes = await Income.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalIncomes / limit);
  res
    .status(StatusCodes.OK)
    .json({ totalIncomes, numOfPages, currentPage: page, incomes });
};

export const createIncome = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const income = await Income.create(req.body);
  res.status(StatusCodes.CREATED).json({ income });
};

export const getIncome = async (req, res) => {
  const income = await Income.findById(req.params.id);
  res.status(StatusCodes.OK).json({ income });
};

export const updateIncome = async (req, res) => {
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

export const deleteIncome = async (req, res) => {
  const removedIncome = await Income.findByIdAndDelete(req.params.id);

  res
    .status(StatusCodes.OK)
    .json({ msg: "income deleted", income: removedIncome });
};

export const showStats = async (req, res) => {
  let stats = await Income.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: "$incomeStatus", count: { $sum: 1 } } },
  ]);

  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});

  const defaultStats = {
    pending: stats.pending || 0,
    paid: stats.paid || 0,
    not_Paid: stats.not_paid || 0,
  };

  let monthlyIncomes = await Income.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    {
      $group: {
        _id: { year: { $year: "$createdAt" }, month: { $month: "$createdAt" } },
        count: { $sum: 1 },
      },
    },
    { $sort: { "_id.year": -1, "_id.month": -1 } },
    { $limit: 6 },
  ]);

  monthlyIncomes = monthlyIncomes
    .map((item) => {
      const {
        _id: { year, month },
        count,
      } = item;
      const date = day()
        .month(month - 1)
        .year(year)
        .format("MMM YY");
      return { date, count };
    })
    .reverse();

  res.status(StatusCodes.OK).json({ defaultStats, monthlyIncomes });
};
