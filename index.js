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
var employee_tracker = function () {
    inquirer
      .prompt([
        {
          type: "list",
          name: "prompt",
          message: "What would you like to do?",
          choices: [
            "View All Departments",
            "View All Roles",
            "View All Employees",
            "Add A Department",
            "Add A Role",
            "Add An Employee",
            "Update An Employee Role",
            "Log Out",
          ],
        },
      ])
      //begin if statements for excecution of chosen option
      .then((answers) => {
        //what to do if user chooses View All Department
        if (answers.prompt === "View All Departments") {
          db.query(`SELECT * FROM dept`, (err, result) => {
            if (err) throw err;
            console.log("Viewing All Departments: ");
            console.table(result);
            employee_tracker();
          });
          //what to do if user chooses View All Roles
        } else if (answers.prompt === "View All Roles") {
          db.query(
            `SELECT roles.title, roles.salary, roles.dept_id, dept.name AS dept_name  FROM roles JOIN dept ON roles.dept_id = dept.id `,
            (err, result) => {
              if (err) throw err;
              console.log("Viewing All Roles: ");
              console.table(result);
              employee_tracker();
            }
          );
          //what to do if user chooses View All Employees
        } else if (answers.prompt === "View All Employees") {
          db.query(
            //`SELECT A.manager_id, B.last_name AS manager_last_name from employees A, employees B Where A.manager_id = B.id`,
            `SELECT employees.first_name, employees.last_name, employees.roles_id, employees.manager_id, B.last_name as manager_last_name, roles.title, roles.salary, roles.dept_id, dept.name as dept_name FROM employees join employees B ON employees.manager_id = b.id JOIN roles ON employees.roles_id = roles.id JOIN dept ON roles.dept_id = dept.id`,
            (err, result) => {
              if (err) throw err;
              console.log("Viewing All Employees: ");
              console.table(result);
              employee_tracker();
            }
          );
          //what to do if user chooses Add A Department
        } else if (answers.prompt === "Add A Department") {
          inquirer
            .prompt([
              {
                type: "input",
                name: "department",
                message: "Name the department.",
                validate: (departmentInput) => {
                  if (departmentInput) {
                    return true;
                  } else {
                    console.log("Please Add A Department!");
                    return false;
                  }
                },
              },
            ])
            .then((answers) => {
              db.query(
                `INSERT INTO dept (name) VALUES (?)`,
                [answers.department],
                (err, result) => {
                  if (err) throw err;
                  console.log(`Added ${answers.department} to the database.`);
                  employee_tracker();
                }
              );
            });