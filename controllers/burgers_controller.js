var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.all(function(data) {
    var handleObj = {
      burgers: data
    };
    res.render("index", handleObj);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.cook(req.body.name
    , function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:name", function(req, res) {
  console.log("name: ", req.params.name);
  burger.eat(req.params.name, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
