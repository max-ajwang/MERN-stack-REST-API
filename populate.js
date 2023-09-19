import { readFile } from "fs/promises";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import Income from "./models/IncomeModel.js";
import User from "./models/UserModel.js";

try {
  await mongoose.connect(process.env.MONGO_URL);
  const user = await User.findOne({ email: "test@test.com" });

  const jsonIncomes = JSON.parse(
    await readFile(new URL("./utils/mockData.json", import.meta.url))
  );
  const incomes = jsonIncomes.map((income) => {
    return { ...income, createdBy: user._id };
  });
  await Income.deleteMany({ createdBy: user._id });
  await Income.create(incomes);
  console.log("Success!!!");
  process.exit(0);
} catch (error) {
  console.log(error);
  process.exit(1);
}
