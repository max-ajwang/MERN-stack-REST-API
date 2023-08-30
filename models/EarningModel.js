import mongoose from "mongoose";
import { EARNING_STATUS, EARNING_TYPE } from "../utils/constants.js";

const EarningSchema = new mongoose.Schema(
  {
    company: String,
    position: String,
    earningStatus: {
      type: String,
      enum: Object.values(EARNING_STATUS),
      default: EARNING_STATUS.PENDING,
    },
    earningType: {
      type: String,
      enum: Object.values(EARNING_TYPE),
      default: EARNING_TYPE.FULL_TIME,
    },
    earningLocation: {
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

export default mongoose.model("Earning", EarningSchema);
