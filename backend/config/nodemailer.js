import nodemailer from "nodemailer";

const nodeTransporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:465,
    secure:true,
    auth:{
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
    },
});

export default nodeTransporter;