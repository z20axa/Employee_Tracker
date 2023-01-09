-- schema files to hold the structures
DROP DATABASE IF EXISTS employeetracker_db;
CREATE DATABASE employeetracker_db;

USE employeetracker_db;

CREATE TABLE department (
    -- name_of_column   data_type   __options or default values__  NOT NULL or NULL
	id INT auto_increment NOT NULL,
	department_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id) -- both primary key and auto_increment has to be set for the column id to work correctly
);

CREATE TABLE role (
	id INT auto_increment NOT NULL,
    role_tittle VARCHAR(30) NOT NULL,
    role_salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id) -- both primary key and auto_increment has to be set for the column id to work correctly
);

CREATE TABLE employee (
	id INT auto_increment NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NOT NULL,
    PRIMARY KEY (id) -- both primary key and auto_increment has to be set for the column id to work correctly
);

