const express = require("express");
const app = express(); // sets up server

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("here");
  res.render("index", { text: "World" });
});

app.get("/users", (req, res) => {
  res.send("User list");
});

app.get("/users/new", (req, res) => {
  res.send("User New Form");
});

//import routes to server
const userRouter = require("./routes/users");

//link route to path
app.use("/users", userRouter);

//make sure server runs
app.listen(3000);
