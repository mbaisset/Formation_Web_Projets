# Formation_Web_Projets
The aim of this prohject is the development of a ToDoList app in the scope of the SGCIB reskilling training session.
This one is developped in HTML and Javascript.

# Architecture of the project




# Data base table creation
The following scripts can be used for creating the ToDoList data base tables

- **Creation of the new todolist schema in the database:**  
```
CREATE SCHEMA 'todolist' ;
```
 
- **Removal of the tasks table from the database if already existing to perform a new installation:**  
 ```
 DROP TABLE IF EXISTS tasks;
 ```

 - **Creation of the tasks table:**  
```
CREATE TABLE tasks (
	idtask INT NOT NULL AUTO_INCREMENT,
	taskname VARCHAR (45),
	taskdescription VARCHAR (450),
	startdate DATE,
	estimatedenddate DATE,
	taskstatus INT,
	taskcloseddate DATE,
	primary key (idtask)
	);
```

# Additional modules to be installed via npm  
The additional modules required to run the ToDoList application are listed in the `package.json` file  

+ ## Installation of Express module  
The express module is used for managing the web framework of the prohect.  
The official documentation is available here: [express js](http://expressjs.com/ "express js official website")

The express module can be installed by running the following command 
```
npm install express --save
```

# Application configuration
In the `db_management/db_utils_mysql.js` file, you will have to modify the `<my_database_user>` and `<my_database_password>` values of the connectToMySQL function by the ones you are currently using

```
function connectToMySQL() {
  var connection = mysql.createConnection({
    host: 'localhost',
    user: '<my_database_user>',
    password: '<my_database_password>',
    database: 'todolist'
  });
```

# Unit Tests
The test folder contains unit tests for the formatTaskStatusNumberToText and formatTaskStatusTextToNumber functions

These ones are run via [mocha](https://mochajs.org/ "mocha official website")

In order to run these ones, you might need to install mocha via npm by using the following commande in the command prompt:  
```npm install --global mocha```