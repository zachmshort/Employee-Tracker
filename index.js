const inquirer = require("inquirer");
const db = require("./db/connecter.js");

db.connect((err) => {
    if (err) throw err;
    console.log("Database connected.");
    employee_tracker();
  });

//user needs to able to: 
// view all departments
// view all roles
// view all employees
// add department
// add role
// add employee
// update employee role
// log out