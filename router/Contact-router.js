const express=require('express');
const Contact=require('../controllers/emailController');
const router=express.Router();
router.route('/contact').post(Contact);
module.exports=router;