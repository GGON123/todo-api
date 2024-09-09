import mongoose from "mongoose";
import data from './mock.js';
import Task from "../models/Task.js";
import * as dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.DATABASE_URL); //Open

await Task.deleteMany({});
await Task.insertMany(data);

mongoose.connection.close(); // Close