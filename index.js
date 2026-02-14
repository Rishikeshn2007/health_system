require("dotenv").config();
const express = require('express');
const path=require('path');
const port = process.env.PORT || 3000;

//System modules
const u_routs=require('./backend/router/user.routes')

const server = express();

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("DB Error:", err))

//Middle wares:
server.use(express.json());
server.use(express.urlencoded());
server.use(express.static(path.join(__dirname,'frontend')));

app.post("/users",u_routs);
app.get("/users",u_routs);

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
