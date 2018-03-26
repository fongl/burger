var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  cook: function(val, cb) {
    orm.insertOne("burgers", "burger_name", val, function(res) {
      cb(res);
    });
  },
  eat: function(targetVal, cb) {
    orm.updateOne("burgers", "devoured", true, "burger_name", targetVal, function(res) {
      cb(res);
    });
  },
};

module.exports = burger;
