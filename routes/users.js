const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("User list");
});

router.get("/new", (req, res) => {
  res.send("User New Form");
});

//Create new user
router.post("/", (req, res) => {
  res.send("Create user");
});

//access user based on id of user
//route dynamically determined by the url
router.get("/:id", (req, res) => {
  //access parameter
  req.params.id;
  res.send(`Get user with id ${req.params.id}`);
});

//export router
module.exports = router;
