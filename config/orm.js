var connection = require('./connection.js');

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
    selectAll: function(tableInput,cb) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, [tableInput], function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
    insertOne: function(table, column, value,cb) {
      var queryString = "INSERT INTO ??(??) VALUES (?)";
      connection.query(queryString, [table,column,value], function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
    updateOne: function(table, changingColumn, changingValue, targetId, targetValue,cb) {
      var queryString =
        "UPDATE ?? SET ?? = ? WHERE ?? = ?";
      connection.query(
        queryString,
        [table,changingColumn,changingValue,targetId,targetValue],
        function(err, result) {
          if (err) throw err;
          cb(result);
        }
      );
    }
  };

module.exports = orm;