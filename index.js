// packages/modules imports
const inquirer = require("inquirer");
const {table} = require('table');
const connection = require('./db/connection');

const inquirer_MainMenu = () => {
  return inquirer.prompt([
    {
      type: "list",
      message: "What would you like to do?",
      choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role", "Exit App"],
      name: "todo"
    }
  ]).then(({todo}) => {
    switch(todo){
      case "Exit App":
        return exit_app();
    case "View All Departments":
        viewAllDepartments();
          break;
      case "View All Roles":
          viewAllRoles();
          break;
      case "View All Employees":
          viewAllEmployees();
          break;
      case "Add a Department":
          addDepartment();
          break;
      case "Add a Role":
          addRole();
          break;
      case "Add an Employee":
          addEmployee();
          break;
      case "Update an Employee Role":
          updateEmployeeRole();
          break;
    }
  });
};

// exit app function declaration
const exit_app = () => {
    // exit the script
    connection.end();
  };

// view all deparment function declaration
const viewAllDepartments = () => {
  return connection.query(
      // read 
      `SELECT * FROM department_table`,
      (err, result) => {
        if(err) console.error(err);
        let formattedResult = result.map( obj => Object.values(obj));
        // console.log(formattedResult);
        // add column names
        formattedResult.unshift(["Department id","Department Name"]);
        // console.log(formattedResult);
        console.log(table(formattedResult));
        inquirer_MainMenu();
      }
  );
};

// view all roles function declaration
const viewAllRoles = () => {
  return connection.query(
      // read 
      `SELECT * FROM role_table`,
      (err, result) => {
        // error message
        if(err) console.error(err);

        // getting data
        let formattedResult = result.map( obj => Object.values(obj));
        // console.log(formattedResult);

        // add column names
        formattedResult.unshift(["Role id","Role Tittle","Role Salary","Department id"]);
        // console.log(formattedResult);

        // print out formatted table
        console.log(table(formattedResult));

        // function call to return to main menu
        inquirer_MainMenu();
      }
  );
};

// view all roles function declaration
const viewAllEmployees = () => {
  return connection.query(
      // read 
      `SELECT * FROM employee_table`,
      (err, result) => {
        // error message
        if(err) console.error(err);

        // getting data
        let formattedResult = result.map( obj => Object.values(obj));
        // console.log(formattedResult);
        
        // add column names
        formattedResult.unshift(["Employee id","Employee First Name","Employee Last Name","Role id", "Manager id"]);
        // console.log(formattedResult);

        // print out formatted table
        console.log(table(formattedResult));

        // function call to return to main menu
        inquirer_MainMenu();
      }
  );
};

// add a department function declaration
const addDepartment = () => {
  // questions to ask user to add a new department
  return inquirer.prompt([
    {
      type: "input",
      message: "What is the department name that you would like to add? ",
      name: "department_name"
    },
  ]).then( inputs => {
    // add/insert new department to the database department table
    connection.query(
    `INSERT INTO department_table SET ?`,
    [
      inputs
    ],

    // error message
    function (err, result) {
      if (err) {
        console.log(err);
      }
    console.log(result);

    // function call to return to main menu
    inquirer_MainMenu();
    });
  });
};

// const addRole = () => {

// }

// const addEmployee = () => {

// }

// const updateEmployee = () => {

// }

// app init
inquirer_MainMenu();





