// instal express
// 1. npm init
// 2. npm install express

const express = require("express");
const PORT = 5555;
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>hello, World!</h1>");
});

app.get("/maths", (req, res) => {
  res.send(
    "<h1>do you know square root -1 equal iota that's an imaginary number</h1>"
  );
});

app.listen(PORT, () => {
  console.log("Server started successfully!");
  console.log(`http://127.0.0.1:${PORT}`);
});
