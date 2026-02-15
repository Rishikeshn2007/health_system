const express=require('express');
const router=express.Router();
const path=require('path');

//System modules
const User = require("../models/user.models.js");

router.post("/register",async (req,res)=>{
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

router.post("/login", async (req, res) => {

    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });

        if (!user || user.password !== password) {

            return res.status(401).json({
                done: false,
                message: "Invalid credentials"
            });
        }

        req.session.user = {
        id: user._id,
        username: user.username
      };

      req.session.save(() => {
      res.json({
        done:true,
        message : "Login successful",

      })
     });


    } catch (err) {
        res.status(500).json({ 
          done: false,
          message: "Error" });
    }
});

const authMiddleware = require("../middleware/user.auth.js");

router.get("/dashboard", authMiddleware, (req, res) => {
    res.sendFile(path.join(__dirname, "..", "..", "frontend", "user", "user_dashboard.html"))
    });

router.get("/logout", (req, res) => {

    req.session.destroy((err) => {

        if (err) {
            return res.status(500).send("Logout failed");
        }

        res.clearCookie("health_session");
        res.redirect("/");   // 302 is default for redirect
    });
});



module.exports=router;