const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection(
    {
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: process.env.DB_PW,
      database: 'employee_tracker'
     
    })
    connection.connect(function(err) {
      if (err) throw err;
      console.log("Connected to database.");
  });
  

  module.exports = connection;