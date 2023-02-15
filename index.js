// packages/modules imports
const inquirer = require("inquirer");
const {table} = require('table');
const connection = require('./db/connection');

const inquirer_MainMenu = () => {
  return inquirer.prompt([
    {
      type: "list",
      message: "What would you like to do?",
      choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Depatment", "Add a Role", "Add an Employee", "Update an Employee Role", "Exit App"],
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
      case "Add a Depatment":
          addDeparment();
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
        if(err) console.error(err);
        let formattedResult = result.map( obj => Object.values(obj));
        console.log(formattedResult);
        // add column names
        formattedResult.unshift(["Role id","Role Tittle","Role Salary","Department id"]);
        console.log(formattedResult);
        console.log(table(formattedResult));
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
        if(err) console.error(err);
        let formattedResult = result.map( obj => Object.values(obj));
        console.log(formattedResult);
        // add column names
        formattedResult.unshift(["Employee id","Employee First Name","Employee Last Name","Role id", "Manager id"]);
        console.log(formattedResult);
        console.log(table(formattedResult));
        inquirer_MainMenu();
      }
  );
};


// app init
inquirer_MainMenu();

// const viewAllRoles = () => {

// }

// const viewAllEmployees = () => {

// }

// const addDeparment = () => {

// }

// const addRole = () => {

// }

// const addEmployee = () => {

// }



  
//  connection.connect(function (err) {
//     if (err) throw err;
//     Inquirer_mainMenu();
//   });

// const viewAllDeparments = () => {
// //   flight_number, 
// // start_time,
// // end_time,
// // origin,
// // destination,
// // `status`,
// // pilot_id
//   console.log("Adding flight");
//   return connection.query(
//     // read from pilots
//     `SELECT * FROM pilots`,
//     (err, result) => {
//       if(err) console.error(err);
//       addFlightQuestions(result);
//     }
//   )
// }

// const addFlightQuestions = (pilots) => {
//   pilots = pilots.map( pilot => ({
//     name: pilot.first_name,
//     value: pilot
//   }));
//   console.log(pilots);

//   return inquirer.prompt([
//     {
//       type: "list",
//       choices: pilots,
//       message: "Which pilot?",
//       name:"pilot"
//     }
//   ])
//   .then( ({pilot}) => {
//     console.log(JSON.stringify(pilot) + "\n\n\n\n\n");
//     mainmenu();
//   });
//   // return mainmenu();
// }

// const viewPilots = () => {
//   return connection.query(
//     // read from pilots
//     `SELECT * FROM pilots`,
//     (err, result) => {
//       if(err) console.error(err);
//       let formattedResult = result.map( obj => Object.values(obj));
//       // add column names
//       formattedResult.unshift(["id","first_name", "last_name", "airline_name"]);
//       // console.log(formattedResult);
//       console.log(table(formattedResult));
//       mainmenu();
//     }
//   )
// }

// const addPilot = () => {
//   // assume you use inquirer to get the following
//   //  first_name, last_name, airline_name

//   return inquirer.prompt([
//     {
//       type: "input",
//       message: "What is the pilot's first name? ",
//       name: "first_name"
//     },
//     {
//       type: "input",
//       message: "What is the pilot's last name? ",
//       name: "last_name"
//     },
//     {
//       type: "input",
//       message: "What is the pilot's airline? ",
//       name: "airline_name"
//     },
//   ])
//   // .then( ({first_name, last_name, airline_name}) => {
//   .then( param => {
    
//     connection.query(
//     `INSERT INTO pilots SET ?`,
//     [
//       // {
//       //   first_name: "Bob", // first_name = "Bob",
//       //   last_name: "Taco", // last_name = "Taco",
//       //   airline_name: "Always Late Air" // airline_name = "Always Late Air"
//       // }
//       param
//     ],
//     /*
//     INSERT INTO pilots SET first_name = "Bob", last_name = "Taco", airline_name = "Always Late Air"
//     */
//     function (err, result) {
//       if (err) {
//         console.log(err);
//       }
//       // console.log(result);
//       mainmenu();
//     });
//   });
  
// }




