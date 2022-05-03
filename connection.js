const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW,
    {
      host: 'localhost',
     
    },
    console.log('Connected to the employee database.')
  );

  module.exports = db;