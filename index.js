const express = require('express');
const path=require('path');
const port = process.env.PORT || 3000;

const server = express();

server.use(express.static(path.join(__dirname,'frontend')));

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
