const empDB = require('./connection.js');
const inquirer = require('inquirer');
const showTable = require('console.table');

function runApp() {
return inquirer.prompt({

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
    })

    .then((data) => {
        const answer = data;

        if (answer === "View all departments") {
            showDepartments();
        }

        if (answer === "View all roles") {
            showRoles();
        }

        if (answer === "View all employees") {
                showEmployees();
        }

        if (answer === "Exit") {
            connection.end();
        }
    })
};

showDepartments = () => {
    const sql = `SELECT department.id AS id, department.name AS department FROM department`;
    connection.promise().query(sql, (err, rows) => {
        if (err) throw err;
            console.table(rows);
            runApp();
});
}

// showRoles = () => {
//     const sql = `SELECT role.id, role.title, department.name AS department
//                 FROM role
//                 INNER JOIN department ON role.department_id = department.id`;
//             connection.promise().query(sql, (err, rows) => {
//             if (err) throw err;
//             console.table(rows);
//             runApp();
//     });
// }

// showEmployees = () => {
//     const sql = `SELECT employee.id, 
//         employee.first_name, 
//         employee.last_name, 
//         role.title, 
//         department.name AS department,
//         role.salary`;

//         connection.promise().query(sql, (err, rows) => {
//             if (err) throw err;
//             console.table(rows);
//             promptUser();
//         });
//     }
// }

runApp();

module.exports = runApp