const express=require('express');
const router=express.Router();

const user_api=require('./api/user.api')

router.post("/api",user_api);