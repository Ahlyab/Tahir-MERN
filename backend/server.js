const express = require("express");

const bodyParser = require("body-parser");
const PORT = 5555;
const app = express();
app.use(express.static("public"));

const users = [];

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  console.log(password);
  let login = false;
  users.forEach((user) => {
    if (user.email === email && user.password === password) {
      login = true;
    }
  });
  if (login === true) {
    res.send("Login Successful");
  } else {
    res.send("Login Failed");
  }
});

app.post("/signup", (req, res) => {
  const { email, password } = req.body;
  users.push({ email: email, password: password });

  console.log(users);
  res.redirect("/index.html");
});

app.listen(PORT, () => {
  console.log("Server started successfully!");
  console.log(`http://127.0.0.1:${PORT}`);
});
