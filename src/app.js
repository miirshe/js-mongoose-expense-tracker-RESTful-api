// import the packages
import express from 'express';
import chalk from "chalk";

// import your files
import { port } from './config/initialConfig.js';
import connectDB from './config/dbConfig.js';

// initializing the app
const app = express();
app.use(express.json());

// rest of your code here


// database connection
connectDB();

app.listen(port, () => {
    console.log(`${chalk.green.bold("Server")} is listening on port ${port}`);
});
