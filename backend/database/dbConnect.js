import mongoose from "mongoose";

const connectDB = (url)=>{
    const response = mongoose.connect(url);
    return response;
}

export default connectDB;