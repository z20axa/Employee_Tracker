INSERT INTO department_table (department_name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");

INSERT INTO role_table (role_title, role_salary, department_id)
VALUES ("Sales Team Manager", 150000, 1),
       ("Salesperon", 10000, 1),
       ("Engineering Team Manager", 150000, 2),
       ("Software Engineer", 130000, 2),
       ("Account Team Manager", 150000, 3),
       ("Accountant", 100000, 3),
       ("Legal Team Manager", 150000, 4),
       ("Lawyer", 200000, 4);

INSERT INTO employee_table (first_name, last_name, role_id, manager_id)
VALUES ("Larry", "Clark", 1, NULL),
       ("Janet", "Brown", 2, 1),
       ("David", "Johnson", 3 , NULL),
       ("Manuel", "Ortiz", 4, 3),
       ("Mario", "Pacheco", 5, NULL),
       ("Kevin", "Ngo", 6, 5),
       ("Kate", "Middle", 7, NULL), 
       ("Tina", "Jackson", 8, 7);

