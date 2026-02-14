const express=require('express');
const router=express.Router();

const user_api=require('./api/user.api.js')

router.use("/api",user_api);

module.exports=router;