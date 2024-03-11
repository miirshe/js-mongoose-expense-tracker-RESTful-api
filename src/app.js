// import the packages
import express from "express";
import chalk from "chalk";
import cookieParser from "cookie-parser";
import cors from "cors";
// import your files
import { port } from "./config/initialConfig.js";
import connectDB from "./config/dbConfig.js";
import authRoutes from "./routes/authRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import expenseRoutes from "./routes/expenseRoutes.js";

// initializing the app
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// rest of your code here
app.use("/api/auth", authRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/expense", expenseRoutes);

// database connection
connectDB();

app.listen(port, () => {
  console.log(`${chalk.green.bold("Server")} is listening on port ${port}`);
});
