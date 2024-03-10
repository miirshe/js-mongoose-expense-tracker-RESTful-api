// import the packages
import express from 'express';
import chalk from "chalk";
import cookieParser from 'cookie-parser';
// import your files
import { port } from './config/initialConfig.js';
import connectDB from './config/dbConfig.js';
import authRoutes from './routes/authRoutes.js';

// initializing the app
const app = express();
app.use(express.json());
app.use(cookieParser());

// rest of your code here
app.use('/api/auth', authRoutes)

// database connection
connectDB();

app.listen(port, () => {
    console.log(`${chalk.green.bold("Server")} is listening on port ${port}`);
});
