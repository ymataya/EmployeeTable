const inquirer = require('inquirer');
var mysql = require('mysql');
const cTable = require('console.table');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rootroot",
    database: "work_db"
});

connection.connect(function (err) {
    if (err) throw err;
    askUser();
});

function askUser() {
    inquirer
        .prompt([{
            type: 'list',
            message: 'What would you like to do?',
            name: 'choice',
            choices: ['View All Employees', 'View All Roles', 'View by Department', 'Add Employee', 'Update Employee Role', 'Remove Employee', 'Done']
        }]).then(function (response) {
            if (response.choice === 'View All Employees') {
                viewEmployees();
            } else if (response.choice === 'View by Department') {
                viewByDepartment();
            } else if (response.choice === 'View All Roles') {
                viewRoles();
            } else if (response.choice === 'Add Employee') {
                addEmployee();
            } else if (response.choice === 'Remove Employee') {
                removeEmployee();
            } else if (response.choice === 'Update Employee Role') {
                updateRole();
            } else if (response.choice === 'Done') {
                connection.end();
                console.log("Application has ended.")
            }
        })
}

function viewEmployees() {
    connection.query('SELECT * FROM employee LEFT JOIN (roles, department) ON (roles.id = employee.role_id AND department.id = roles.department_id)', function (err, data) {
        if (err) throw err;
        console.table(data);
        askUser();
    });
}

function viewByDepartment() {
    inquirer.prompt([
        {   type: 'input',
            message: 'What is the id for your department? 1-Accounting, 2-Creative, 3-Marketing, 4-IT',
            name: 'id',
        }  
    ]).then(data=>{
        connection.query(`SELECT * FROM employee LEFT JOIN (roles, department) ON (roles.id = employee.role_id AND department.id = roles.department_id) WHERE department.id = ${data.id}`, function (err, data) {
            if (err) throw err;
            console.table(data);
            askUser();
        });
    })  
}

function viewRoles() {
    connection.query('SELECT employee.first_name, employee.last_name, roles.title FROM employee, roles WHERE roles.id=employee.role_id', function (err, data) {
        if (err) throw err;
        console.table(data);
        askUser();
    });
}

function addEmployee() {
    inquirer.prompt([
        {   type: 'input',
            message: 'What is the FIRST name of the employee?',
            name: 'first_name',
        },
        {   type: 'input',
            message: 'What is the LAST name of the employee?',
            name: 'last_name',
        },
        {   type: 'input',
            message: 'What is the role of the employee? 1-Accountant, 2-Clerk, 3-Designer, 4-UI/UX Researcher, 5-Marketing Consultant, 6-Marketing Manager, 7-Network Admin, 8-Business Analyst',
            name: 'role',
        }  
    ]).then(data=>{
        connection.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES('${data.first_name}', '${data.last_name}', ${data.role}, 1);`, function(err, data){ 
        if (err) throw err;
        console.table(data);
        console.log("Successfully added!")
        askUser()
    })
    })  
}

function removeEmployee() {
        inquirer.prompt([
            {   type: 'input',
                message: 'What is the LAST name of the employee you want to remove?',
                name: 'lastName',
            }  
        ]).then(data => {
            connection.query(`DELETE FROM employee WHERE last_name='${data.lastName}'`, function(err, data){
            if (err) throw err;
            console.table(data);
            console.log("Successfully Removed Employee!")
            askUser()
        });
    })
}

function updateRole() {
    inquirer.prompt([
    {
        type: 'input',
        message: 'What is the new title for your employee? 1-Accountant, 2-Clerk, 3-Designer, 4-UI/UX Researcher, 5-Marketing Consultant, 6-Marketing Manager, 7-Network Admin, 8-Business Analyst',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the LAST name of your employee?',
        name: 'id',
    },
]).then(data => {
        connection.query(`UPDATE employee SET role_id='${data.title}' WHERE last_name='${data.id}'`, function (err, data) {
            if (err) throw err;
            console.table(data);
            console.log("Successfully Changed Role!")
            askUser()
        });
    })
}
