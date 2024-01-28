import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import applicationRoute from './routes/applicationRoutes.js'
import userRoutes from './routes/users.js'
import authRoutes from './routes/auth.js'
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json())

app.use('/applications', applicationRoute);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

mongoose.connect(process.env.mongoDBURL).then(() => {
    console.log('App connected to DB');
    app.listen(process.env.PORT || PORT, () => {
        console.log(`App is listening on PORT: ${PORT}`)
    });
}).catch((error) => {
    console.log(error)
})