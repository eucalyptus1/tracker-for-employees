const mysql = require('mysql2');
const runApp = require('./app.js');
// const path = require('path')
// require('dotenv').config({ path: path.resolve(__dirname, './.env') })
// require('dotenv').config();

const empDB = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Musqull1!',
      database: 'employee_tracker'
     
    })
    empDB.connect(function(err) {
      if (err) throw err;
      console.log("Connected to database.");
      runApp();
  });
  

  module.exports = empDB;