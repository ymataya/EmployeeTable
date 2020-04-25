const inquirer = require("inquirer");
var mysql = require("mysql");
const cTable = require('console.table');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "rootroot",
  database: "work_db"
});

connection.connect(function(err){
    if (err) throw err;
    askUser();
    // connection.end();
});

function askUser() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What would you like to do?',
                name: 'choice',
                choices: ['View All Employees', 'View All Employees by Department', 'View All Employees by Manager', 'Add Employee', 'Remove Employee', 'Update Employee Role', 'Update Employee Manager', 'View All Roles']
            }
        ]).then(function(response) {
            if (response.choice === 'View All Employees') {
                viewEmployees();
            }
            else if (response.choice === 'View All Employees by Department') {
                viewByDepartment();
            }
            else if (response.choice === 'View All Employees by Manager') {
                viewByManager();
            }
            else if (response.choice === 'Add Employee') {
                addEmployee();
            }
            else if (response.choice === 'Remove Employee') {
                removeEmployee();
            }
            else if (response.choice === 'Update Employee Role') {
                updateRole();
            }
            else if (response.choice === 'Update Employee Manager') {
                updateManager();
            }
            else if (response.choice === 'View All Roles') {
                viewRoles();
            }
            console.log(response); //change it in not a console
        })
}

function viewEmployees() {
    // connection.query('', function(err, data){
    //     if (err) throw err;
    //     console.log(data);
    // });
}

function viewByDepartment() {
    // connection.query('', function(err, data){
    //     if (err) throw err;
    //     console.log(data);
    // });
}

function viewByManager() {
    // connection.query('', function(err, data){
    //     if (err) throw err;
    //     console.log(data);
    // });
}

function addEmployee() {
    // connection.query('', function(err, data){
    //     if (err) throw err;
    //     console.log(data);
    // });
}

function removeEmployee() {
    // connection.query('', function(err, data){
    //     if (err) throw err;
    //     console.log(data);
    // });
}

function updateRole() {
    // connection.query('', function(err, data){
    //     if (err) throw err;
    //     console.log(data);
    // });
}

function updateManager() {
    // connection.query('', function(err, data){
    //     if (err) throw err;
    //     console.log(data);
    // });
}
function viewRoles() {
    // connection.query('', function(err, data){
    //     if (err) throw err;
    //     console.log(data);
    // });
}