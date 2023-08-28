import Earning from "../models/EarningModel.js";
import { StatusCodes } from "http-status-codes";

const getAllEarnings = async (req, res) => {
  const earnings = await Earning.find({});
  res.status(StatusCodes.OK).json({ earnings });
};

const createEarning = async (req, res) => {
  const earning = await Earning.create(req.body);
  res.status(StatusCodes.CREATED).json({ earning });
};

const getEarning = async (req, res) => {
  const earning = await Earning.findById(req.params.id);
  res.status(StatusCodes.OK).json({ earning });
};

const updateEarning = async (req, res) => {
  const updatedEarning = await Earning.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res
    .status(StatusCodes.OK)
    .json({ msg: "earning modified", earning: updatedEarning });
};

const deleteEarning = async (req, res) => {
  const removedEarning = await Earning.findByIdAndDelete(req.params.id);

  res
    .status(StatusCodes.OK)
    .json({ msg: "earning deleted", earning: removedEarning });
};

export {
  createEarning,
  deleteEarning,
  getAllEarnings,
  getEarning,
  updateEarning,
};
