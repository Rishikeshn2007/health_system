const express = require('express');

const port = process.env.PORT || 3000;

const server = express();

server.use("/", (req, res) => {
  res.send("NextGen coders");
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
