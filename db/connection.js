// module import
const mysql = require("mysql2");

// connection to MySQL
const connection = mysql.createConnection({
  host: "localhost",
  // Your username
  user: "root",
  // Your password
  password: "rootroot",
  database: "employeetracker_db"
});

module.exports = connection;
