import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";

export const createUser = async (req,res) =>{
    try {
        /* {
            "name":"ali",
            "last_name":"Ahmadi",
            "email":"ali@gmail.com",
            "password":"ksdjfkj"
        } */
        const {password,...rest} = req.body;
        const hashedPassword = await bcrypt.hash(password,10);
        const userData = userModel({...rest,password:hashedPassword});
        const newUser = await userData.save();
        res.status(200).json({success:true,message:"user created successfull",newUser});
    } catch (error) {
        res.status(500).json({success:false,message:error.message});
    }
}

export const getUsers = async (req,res) =>{
    try {
        const users = await userModel.find();
        if(users){
            res.status(200).json({success:true,users});
        }
        else{
            res.status(403).json({success:false,message:"not users found"});
        }
    } catch (error) {
        res.status(500).json({success:false,message:error.message});
    }
}

export const getUser = async (req,res) =>{
    const userID = req.params.id;
    try {
        const user = await userModel.findById(userID);
        if(user){
            res.status(200).json({success:true,user});
        }
        else{
            res.status(403).json({success:false,message:"user not found"});
        }
    } catch (error) {
        res.status(500).json({success:false,message:error.message});
    }
}

export const updateUser = async (req,res) =>{
    const userID = req.params.id;
    const {name,last_name,email,password} = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password,10);
        const updatedUser = await userModel.findByIdAndUpdate(userID,{$set:{
            name: name,
            last_name: last_name,
            email: email,
            password:hashedPassword
        }});
        if(updateUser){
            res.status(200).json({success:true,message:"user updated successfull",updateUser});
        }
        else{
            res.status(404).json({success:true,message:"user not updated",updateUser});
        }
    } catch (error) {
        res.status(500).json({success:false,message:error.message});
    }
}

export const deleteUser = async (req,res) =>{
    const userID = req.params.id;
    try {
        const deletedUser = await userModel.findByIdAndDelete(userID);
        if(deletedUser){
            res.status(200).json({success:true,message:"user deleted successfully",deletedUser});
        }
        else{
            res.status(403).json({success:false,message:"user not deleted",deletedUser});
        }
    } catch (error) {
        res.status(500).json({success:false,message:error.message});
    }
}