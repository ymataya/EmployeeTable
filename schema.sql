CREATE DATABASE work_db;

USE work_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  names VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

USE work_db;

CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(5,2) NOT NULL,
  department VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

USE work_db;

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT, 
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT(11) NOT NULL,
  manager_id INT(11),
  PRIMARY KEY (id)
);

