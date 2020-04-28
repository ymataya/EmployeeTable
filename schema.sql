DROP DATABASE IF EXISTS work_db;

CREATE DATABASE work_db;

USE work_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  names VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO department (names) 
VALUES("Accounting");
INSERT INTO department (names) 
VALUES("Creative");
INSERT INTO department (names) 
VALUES("Marketing");
INSERT INTO department (names) 
VALUES("IT");

USE work_db;

CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,2) NOT NULL,
  department_id INT(11) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO roles (title, salary, department_id) 
VALUES("Accountant", 5000, 1);
INSERT INTO roles (title, salary, department_id) 
VALUES("Clerk", 3000, 1);
INSERT INTO roles (title, salary, department_id) 
VALUES("Designer", 2000, 2);
INSERT INTO roles (title, salary, department_id) 
VALUES("UI/UX Researcher", 2500, 2);
INSERT INTO roles (title, salary, department_id) 
VALUES("Marketing Consultant", 1500, 3);
INSERT INTO roles (title, salary, department_id) 
VALUES("Marketing Manager", 3000, 3);
INSERT INTO roles (title, salary, department_id) 
VALUES("Network Admin", 8000, 4);
INSERT INTO roles (title, salary, department_id) 
VALUES("Business Analyst", 7000, 4);

USE work_db;

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT, 
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT(11) NOT NULL,
  manager_id INT(11) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES("John ", "Gibbs", 5, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES("Andrea", "Hanson", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES("Alex", "Moreno", 6, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES("Samantha", "Bennett", 4, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES("Natalia", "Young", 1, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES("Anthony", "Reyes", 3, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES("Alyssa", "Mills", 7, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES("Zack", "Moore", 8, 1);

SELECT * FROM employee LEFT JOIN (roles, department)
ON (roles.id = employee.role_id AND department.id = roles.department_id);

SELECT * FROM employee LEFT JOIN (roles, department) 
ON (roles.id = employee.role_id AND department.id = roles.department_id)
WHERE department.id = 2;
