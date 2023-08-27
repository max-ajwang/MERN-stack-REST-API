import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
const app = express();
import morgan from "morgan";

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// db and authenticateUser
import connectDB from "./db/connect.js";

//routers
import authRouter from "./routes/authRoutes.js";
import earningsRouter from "./routes/earningsRoutes.js";

// Middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/earnings", earningsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
