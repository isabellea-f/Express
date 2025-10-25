const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("User list");
});

router.post("/", (req, res) => {
  res.send("Create user");
});

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`Get user with id ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Get user with id ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Get user with id ${req.params.id}`);
  });

const users = [{ name: "Kyle" }, { name: "Sally" }];
//Runs any time it finds a param that matches the name you pass in
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});
module.exports = router;
