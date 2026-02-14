require("dotenv").config();
const express = require('express');
const mongoose=require('mongoose')
const path=require('path');
const port = process.env.PORT || 3000;

//System modules
const u_routs=require('./backend/user.routes.js')

const server = express();

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("DB Error:", err))

//Middle wares:
server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(express.static(path.join(__dirname,'frontend')));

server.use("/users",u_routs);
server.use("/users",u_routs);

server.get("/login",(req,res)=>{
  res.sendFile(path.join(__dirname,'frontend','home','login.html'));
});

server.get('/register',(req,res)=>{
  res.sendFile(path.join(__dirname,'frontend','home','register.html'));
})

server.use("/", (req, res) => {
  res.sendFile(path.join(__dirname,'frontend','home','home.html'));
});



server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
