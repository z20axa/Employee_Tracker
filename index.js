// packages/modules imports
const inquirer = require("inquirer");
const { table } = require('table');
const connection = require('./db/connection');

// inquirer main menu function declaration
const inquirer_MainMenu = () => {
  // to do question to ask the user
  return inquirer.prompt([
    {
      type: "list",
      message: "What would you like to do?",
      choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role", "Exit App"],
      name: "todo"
    }
  ]).then(({ todo }) => {
    switch (todo) {
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
        addNewDepartment();
        break;
      case "Add a Role":
        addNewRole();
        break;
      // case "Add an Employee":
      //   addNewEmployee();
      //   break;
      // case "Update an Employee Role":
      //   updateEmployeeRole();
      //   break;
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
      // error message
      if (err) console.error(err);

      // getting data
      let formattedResult = result.map(obj => Object.values(obj));
      // console.log(formattedResult);

      // add column names
      formattedResult.unshift(["Department id", "Department Name"]);
      // console.log(formattedResult);

      // print out formatted table
      console.log(table(formattedResult));

      // function call to return to main menu
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
      if (err) console.error(err);

      // getting data
      let formattedResult = result.map(obj => Object.values(obj));
      // console.log(formattedResult);

      // add column names
      formattedResult.unshift(["Role id", "Role Tittle", "Role Salary", "Department id"]);
      // console.log(formattedResult);

      // print out formatted table
      console.log(table(formattedResult));

      // function call to return to main menu
      inquirer_MainMenu();
    }
  );
};

// view all employees function declaration
const viewAllEmployees = () => {
  return connection.query(
    // read 
    `SELECT * FROM employee_table`,
    (err, result) => {
      // error message
      if (err) console.error(err);

      // getting data
      let formattedResult = result.map(obj => Object.values(obj));
      // console.log(formattedResult);

      // add column names
      formattedResult.unshift(["Employee id", "Employee First Name", "Employee Last Name", "Role id", "Manager id"]);
      // console.log(formattedResult);

      // print out formatted table
      console.log(table(formattedResult));

      // function call to return to main menu
      inquirer_MainMenu();
    }
  );
};

// add a new department function declaration
const addNewDepartment = () => {
  // questions to ask user to add a new department
  return inquirer.prompt([
    {
      type: "input",
      message: "What is the department name that you would like to add? ",
      name: "department_name"
    },
  ]).then(inputs => {
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
        // console.log(result);

        // function call to return to main menu
        inquirer_MainMenu();
      });
  });
};

// add a new role function declaration
const addNewRole = () => {
  // questions to ask user to add a new role
  return connection.query("SELECT * FROM department_table", (err, res) => {
    inquirer.prompt([
      {
        type: "input",
        message: "What is the role title that you would like to add?",
        name: "role_title"
      },
      {
        type: "input",
        message: "What is this new role salary?",
        name: "role_salary"
      },
      {
        type: "list",
        message: "What is this new role department name?",
        choise: res.map(role_department => role_department.department_name),
        name: "role_department"
      },
    ]).then(({role_title, role_salary, role_department}) => {
        // finding the role department to get its id value 
        let roleDepartment = res.find(role_department => role_department.department_name === role_department);

        // add/insert new role to the database role table
        connection.query(
        `INSERT INTO role_table SET ?`,
        {
          title: role_tittle,
          salary: role_salary,
          department_id: roleDepartment.id
        },

        // error message
        function (err, result) {
           if (err) {
             console.log(err);
            }
        // console.log(result);

      // function call to return to main menu
      inquirer_MainMenu();
      });
    })
  })
}

// add a new employee function declaraion
// const addEmployee = () => {

// }

// udpate an employee function declaration
// const updateEmployee = () => {

// }

// BONUS points
// udpate an employee manager function declaration
// const updateEmployeeManager = () => {

// }

// BONUS points
// view employees by manager function declaration
// const viewEmployeesByManager = () => {

// }

// BONUS points
// view employees by department function declaration
// const viewEmployeesByDepartment = () => {

// }

// BONUS points
// delete department function declaration
// const deleteDepartment = () => {

// }

// BONUS points
// delete role function declaration
// const deleteRole = () => {

// }

// BONUS points
// delete employee function declaration
// const deleteEmployee = () => {

// }

// BONUS points
// view department utilized budget function declaration
// const viewDepartmentBudget = () => {

// }


// app init
inquirer_MainMenu();





