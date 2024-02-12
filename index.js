const inquirer = require("inquirer");
const db = require("./db/connecter.js");

db.connect((err) => {
    if (err) throw err;
    console.log("Database connected.");
    employee_tracker();
  });

