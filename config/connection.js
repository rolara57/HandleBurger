var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3006,
  user: "root",
  password: "Lo098uhj!",
  database: "burgers_db"
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
