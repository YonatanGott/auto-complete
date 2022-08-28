import cors from 'cors';
import express from "express"
import router from "./routes/index";
import { initMongoDB } from "./config/mongo.config"
import { initialDatabase } from './utils/initialDatabase';

// express app
const app = express()
const corsConfig = {
    origin: true,
    credentials: true,
};
app.use(cors(corsConfig));
app.options('*', cors(corsConfig));

// middleware
app.use(express.json())

// routes
app.use("/",router())

// connect to database
initMongoDB()

// This is for initial database population with dummy data - comment next line if not needed
initialDatabase()

// app
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})