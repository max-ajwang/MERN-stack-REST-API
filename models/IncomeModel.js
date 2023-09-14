import mongoose from "mongoose";
import { INCOME_STATUS, INCOME_TYPE } from "../utils/constants.js";

const IncomeSchema = new mongoose.Schema(
  {
    company: String,
    position: String,
    incomeStatus: {
      type: String,
      enum: Object.values(INCOME_STATUS),
      default: INCOME_STATUS.PENDING,
    },
    incomeType: {
      type: String,
      enum: Object.values(INCOME_TYPE),
      default: INCOME_TYPE.FULL_TIME,
    },
    incomeLocation: {
      type: String,
      default: "my city",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Income", IncomeSchema);
