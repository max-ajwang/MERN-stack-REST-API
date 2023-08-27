import mongoose from "mongoose";

const EarningSchema = new mongoose.Schema(
  {
    company: String,
    position: String,
    earningStatus: {
      type: String,
      enum: ["paid", "not-paid", "pending"],
      default: "pending",
    },
    earningType: {
      type: String,
      enum: ["full-time", "part-time", "passive"],
      default: "full-time",
    },
    earningLocation: {
      type: String,
      default: "my city",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Earning", EarningSchema);
