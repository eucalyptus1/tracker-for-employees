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
        } else if (answer === "View all roles") {
            showRoles();
        } else if (answer === "View all employees") {
            showEmployees();
        } else if (answer === "Exit") {
            connection.end();
        }
    })
}

showDepartments = () => {
    // const sql = 'SELECT * FROM department';
    connection.query("SELECT * FROM department", (err, rows) => {
        if (err) throw err;
            console.table(rows);
            runApp();
});


showRoles = () => {
    connection.query(``, (err, rows) => {
            if (err) throw err;
            console.table(rows);
            runApp();
    });
}

showEmployees = () => {
        connection.query(, (err, rows) => {
            if (err) throw err;
            console.table(rows);
            promptUser();
        });
    }
}

runApp();