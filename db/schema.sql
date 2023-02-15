-- schema files to hold the structures
DROP DATABASE IF EXISTS employeetracker_db;
CREATE DATABASE employeetracker_db;

USE employeetracker_db;

CREATE TABLE department_table (
    -- name_of_column   data_type   __options or default values__  NOT NULL or NULL
	id INT auto_increment NOT NULL,
	department_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role_table (
	id INT auto_increment NOT NULL,
    role_title VARCHAR(30) NOT NULL,
    role_salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id), 
    FOREIGN KEY (department_id) REFERENCES department_table (id)
);

CREATE TABLE employee_table (
	id INT auto_increment NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES role_table (id),
    FOREIGN KEY (manager_id) REFERENCES employee_table (id)
);

