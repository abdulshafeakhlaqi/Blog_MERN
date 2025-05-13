import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    last_name:{type:String,required:false},
    email:{type:String,required:true},
    password:{type:String,required:true},
    is_verified:{type:Boolean,default:false,required:true},
    verification_code:{type:String,default:null},
    code_expire_date:{type:Date,default:null},
},{timeseries:true});

const userModel = mongoose.model("users",userSchema);

export default userModel;