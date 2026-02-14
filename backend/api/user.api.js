const express=require('express');
const router=express.Router();

//System modules
const User = require("./models/user.models");

router.get("/register",async (req,res)=>{
    try {
        const { username, password, email } = req.body;

    // Validation
    if (!username || !password || !email) {
      return res.status(400).json({
        message: "All fields are required",
        done: false
      });
    }

    // Check if user exists
    const userExists = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (userExists) {
      return res.status(409).json({
        message: "Username or Email already exists",
        done: false
      });
    }

    // Create user
    const user = new User({
      username,
      password,
      email,
    });

    await user.save();

    res.status(201).json({
      message: "User registered successfully",
      done: true,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Server error",
      done: false
    });
  }
});

module.exports=router;