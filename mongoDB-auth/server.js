const express = require("express");
const app = express();
const port = 5555;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const User = require("./models/User");
const bcrypt = require("bcrypt");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/registration", async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const exist = await User.findOne({ email });
    if (exist) {
      return res.send("User already exists");
    }

    const user = new User({ email, password: hashedPassword });
    user.save();
    res.redirect("/login.html");
  } catch (err) {
    res.send("Some error occurred");
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.send("User does not exist");
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.send("Invalid password");
  }
  res.redirect("/update.html");
});

app.post("/update", async (req, res) => {
  const { email, password } = req.body;
  const user = User.findOne({ email });
  if (!user) {
    return res.send("User does not exist");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  //   user.password = hashedPassword;
  //   user.save();
  User.updateOne({ email }, { password: hashedPassword });
  res.redirect("/delete.html");
});

app.post("/delete", async (req, res) => {
  const { email } = req.body;
  const user = User.findOne({ email });
  if (!user) {
    return res.send("User does not exist");
  }

  await User.deleteOne({ email });
  res.send("User deleted");
});

mongoose
  .connect("mongodb://127.0.0.1:27017/tahir")
  .then(() => {
    console.log("Connected to database");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to database", err);
  });
