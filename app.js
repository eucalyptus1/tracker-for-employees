const db = require('./db/db');
const inquirer = require('inquirer');
const showTable = require('console.table');

const menu = () => {
return inquirer.prompt([
        {
            type: 'list',
            name: 'options',
            message: 'What would you like to do?',
            options: ['View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',
                'Exit']
        }
    ])
    .then((data) => {
        const { answer } = data;

        if (answer === "View all departments") {
            showDepartments();
        }

        if (answer === "View all roles") {
            showRoles();
        }

        if (answer === "View all employees") {
                showEmployees();
        }
    })
};

showDepartments = () => {
    const sql = `SELECT department.id AS id, department.name AS department FROM department`;
    connection.promise().query(sql, (err, rows) => {
        if (err) throw err;
            console.table(rows);
            menu();
});

showRoles = () => {
    const sql = `SELECT role.id, role.title, department.name AS department
                FROM role
                INNER JOIN department ON role.department_id = department.id`;
            connection.promise().query(sql, (err, rows) => {
            if (err) throw err;
            console.table(rows);
            menu();
    });
}

showEmployees = () => {
    const sql = `SELECT employee.id, 
        employee.first_name, 
        employee.last_name, 
        role.title, 
        department.name AS department,
        role.salary`;

        connection.promise().query(sql, (err, rows) => {
            if (err) throw err;
            console.table(rows);
            promptUser();
        });
    }
}