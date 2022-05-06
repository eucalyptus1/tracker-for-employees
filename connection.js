const mysql = require('mysql2');
// const path = require('path')
// require('dotenv').config({ path: path.resolve(__dirname, './.env') })
// require('dotenv').config();

const connection = mysql.createConnection(
    {
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'Musqull1!',
      database: 'employee_tracker'
     
    })
    connection.connect(function(err) {
      if (err) throw err;
      console.log("Connected to database.");
  });
  

  module.exports = connection;