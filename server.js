require("dotenv").config();
const express =require('express');
const cors =require('cors');
const router=require('./router/Contact-router');
const app=express();
const corsOptions={
    origin:"https://ukglory.netlify.app",
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    Credentials:true,
}
app.use(cors(corsOptions));
app.use(express.json());
app.use('/api/auth',router);
const PORT=3000;
app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`);
});