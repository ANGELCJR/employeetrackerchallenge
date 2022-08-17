const inquirer = require("inquirer");

init();

function init() 
  inquirer
    .prompt({
      type: "list",
      choices: [
        "Add Department",
        "Add Role",
        "Add Employee",
        "View Departments",
        "View Roles",
        "View Employees",
        "Update Employee Role",
        "Delete Employee",
        "Delete Role",
        "Delete Department",
        "Quit",
      ],
      message: "What would you like to do?",
      name: "option",
    })
