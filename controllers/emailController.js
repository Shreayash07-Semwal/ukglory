const express=require('express');
const nodemailer=require("nodemailer")
const Contact=async(req,res)=>{
    const {username,phone,email,message}=req.body;
    try {
        const transpoter=nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:process.env.EMAIL_USER,
                pass:process.env.EMAIL_PASSWORD,
            }
        });
        const mailOptions={
            from:email,
            to:process.env.RECEIVER_EMAIL,
            subject:"New Details from website",
            text:`Name:${username}\n Phone:${phone}\nEmail:${email}\nMessage:${message}`,
        };
        await transpoter.sendMail(mailOptions);
        res.status(200).json({message:"Feedback send successfully!"});
    } catch (error) {
        res.status(404).json({error:"failed to send feedback"});
    }
}
module.exports=Contact;