# Formation_Web_Projets
The aim of this prohject is the development of a ToDoList app in the scope of the SGCIB reskilling training session


# Data base table creation
The following scripts can be used for creating the ToDoList data base tables

- *Creation of the new todolist schema in the database*
CREATE SCHEMA 'todolist' ;
 
- *Removal of the tasks table from the database if already existing to perform a new installation* 
 drop table if exists tasks;

 - *Creation of the tasks table*
create table tasks (
	idtask INT NOT NULL AUTO_INCREMENT,
	taskname VARCHAR (45),
	taskdescription VARCHAR (450),
	startdate DATE,
	estimatedenddate DATE,
	taskstatus INT,
	taskcloseddate DATE,
	primary key (idtask)
	);

# Application configuration
In the db_management/db_utils_mysql.js file, you will have to modify the user and password field values of the connectToMySQL function in order to correspond to the ones you are using

```
function connectToMySQL() {
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'my_database_user',
    password: 'my_database_password',
    database: 'todolist'
  });
```

# Unit Tests
The test folder contains unit tests for the formatTaskStatusNumberToText and formatTaskStatusTextToNumber functions

These ones are run via [mocha](https://mochajs.org/ "mocha official site")

In order to run these ones, you might need to install mocha via npm by using the following commande in the command prompt:  
```npm install --global mocha```