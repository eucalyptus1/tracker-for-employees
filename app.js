const connection = require('./connection.js');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const showTable = require('console.table');


function runApp() {
inquirer.prompt({

            type: 'list',
            name: 'questions',
            message: 'What would you like to do?',
            choices: ['View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',
                'Exit'
            ]
    })

    .then(function (answer) {

        if (answer.questions === 'View all departments') {
            showDepartments();
        } else if (answer.questions === "View all roles") {
            showRoles();
        } else if (answer.questions === "View all employees") {
            showEmployees();
        } else if (answer.questions === "Add a department") {
            addDepartment();
        } else if (answer.questions === "Add a role") {
            addRole();
        } else if (answer.questions === "Add an employee") {
            addEmployees();
        } else if (answer.questions === "Update an employee role") {
            updateEmployee();
        } else if (answer.questions === "Exit") {
            connection.end();
        }
    })
}

showDepartments = () => {
    connection.query("SELECT * FROM department", (err, rows) => {
        if (err) throw err;
            console.table(rows);
            runApp();
});
}


showRoles = () => {
    connection.query(
        `SELECT * FROM role`, (err, rows) => {
            if (err) throw err;
            console.table(rows);
            runApp();
    });
}

showEmployees = () => {
        connection.query(`SELECT * FROM employee`, (err, rows) => {
            if (err) throw err;
            console.table(rows);
            runApp();
        });
}

addDepartment = () => {
    inquirer.prompt([
      {
        type: 'input', 
        name: 'addDept',
        message: "Enter the name of the department you want to add",
        validate: addDept => {
          if (addDept) {
              return true;
          } else {
              console.log('Field cannot be blank');
              return false;
          }
        }
      }
    ])
      .then(answer => {
        connection.query(`INSERT INTO department (name) VALUES (?)`, 
        answer.addDept, (err, rows) => {
          if (err) throw err;
          console.table(rows);
          showDepartments();
      });
    });
  }

runApp();