import nodeTransporter from "../config/nodemailer.js";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";

const generateCode = () => Math.floor(100000 + Math.random() * 900000).toString();

export const login = async (req , res) =>{
 
}

export const logout = async (req , res) =>{

}

export const register = async (req , res) =>{
    try {
        const code = generateCode();
        const expiration = new Date(Date.now()+ 15 * 60 * 1000);
        const {password,...rest} = req.body;
        const hashedPassword = await bcrypt.hash(password,10);
        const userData = userModel({...rest,verification_code:code,code_expire_date:expiration,password:hashedPassword});
        const newUser = await userData.save();

        await nodeTransporter.sendMail({
            from: process.env.MAIL_USER,
            to:newUser.email,
            subject: "your verification code for myweblog.com",
            text: `Your verification code is:${code}`,
        })
        res.status(200).json({success:true,message:"registration is successfully finished",newUser});

    } catch (error) {
        res.status(500).json({success:false,message:error.message});
    }
}