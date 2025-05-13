import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./database/dbConnect.js";
import postRoute from "./routes/postsRoute.js";
import userRouter from "./routes/userRoute.js";
import authRoute from "./routes/authRoute.js";

const port = process.env.PORT || 5000;
const dbURL = process.env.DB_URL;

const app = express();
app.use(express.json());
app.use(cors());

const runnDB = async (dbURL) =>{
    try {
        await connectDB(dbURL);
        console.log("Database running successfully");
    } catch (error) {
        console.log("Databas not running: Error:",error.message)
    }
}

runnDB(dbURL);

/* app.get("/",(req,res)=>{
    res.json({message:"Welcome to my Website"});
}); */

app.use(postRoute);
app.use(userRouter);
app.use(authRoute);

app.listen(port,()=>{
    console.log("server is runnig on Port:",port);
    
})
