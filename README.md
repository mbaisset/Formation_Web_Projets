# Formation_Web_Projets

**Table of content**

- [Description](#description)
- [Architecture](#architecture)
- [Data base creation](#database)
- [Additional nodejs modules](#nodejs)
- [Application configuration](#configuration)
- [Running the application](#run)
- [Tests](#test)


## Description <a name="description"></a>
The aim of this prohject is the development of a ToDoList app in the scope of the SGCIB reskilling training session.
This one is developped in HTML and Javascript.  

  
## Architecture of the project <a name="architecture"></a>

The project architecture is the following one:  
  
![architecture](/doc/screenshots/project_structure.jpg)   

|Folder | Description  | 
--- | --- | 
| root | This folder contains the javascript file for running the ToDoList application and relevant information for using the application|
|db_management| This folder contains the java script file to connect to and send request to mysql database |
|node_modules| This folder is not provided in GitHub. It contains all the modules for nodejs|
|public| This folder contains the files publicly accessible (css and png files)|
|src|This folder the javascript files managing the ToDoList application|
|test| This folder contains the javascript file to run unit tests via mocha and also the javascript to be used with cypress to run integration tests|

## Data base table creation
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

## Additional modules for nodejs to be installed via npm  <a name="nodejs"></a>
The additional modules required to run the ToDoList application are listed in the `package.json` file  

+ ### Installation of Express module  
The express module is used for managing the web framework of the project.  
The official documentation is available here: [express js](http://expressjs.com/ "express js official website")

The express module can be installed by running the following command 
```
npm install express --save
```

+ ### Installation of mysql module  
The express module is used for managing the connection to the mysql database and to send SQL request to the mysql database.  
The official documentation is available here: [mysql](https://www.npmjs.com/package/mysql/ "mysql official website")

The mysql module can be installed by running the following command 
```
npm install mysql --save
```

## Application configuration <a name="configuration"></a>
In the `db_management/db_utils_mysql.js` file, you will have to modify the `<my_database_user>` and `<my_database_password>` values of the connectToMySQL function by the ones you are currently using

```
function connectToMySQL() {
  var connection = mysql.createConnection({
    host: 'localhost',
    user: '<my_database_user>',
    password: '<my_database_password>',
    database: 'todolist'
  });#v
```

## Running the application <a name="run"></a>
1. Clone the github folder to your drive
2. Install the relevant additional modules as explained in the [Additional nodejs modules](#nodejs) section in the same folder you deployed the application
3. Run the provided script to create the mysql database as provided in the section [Data base creation](#database)
4. Modify the `db_management/db_utils_mysql.js` with the relevant user and password as described in the section [Application configuration](#configuration)
5. In the folder where you deployed the application, you will have to run the following command to launch the ToDoList application server in a command prompt
```
node app_task_manager_server.js
```
6. If the server is launched with success, you should see the following message in the command prompt
```
Task manager app listening on port 3000
```
7. Once the server is successfully launched, you can connect to the application by typing the following command in your brownser address bar
```
http://localhost:3000/
```
8. By default, the application will display the ongoing tasks page
9. A new task can be created via the "Add a task" button
10. Once the new task is created successfully, the application will by default display the ongoing tasks page

## Tests <a name="test"></a>

- ### Unit tests
The test folder contains unit tests for the formatTaskStatusNumberToText and formatTaskStatusTextToNumber functions

These ones are run via [mocha](https://mochajs.org/ "mocha official website")

In order to run these ones, you might need to install mocha via npm by using the following commande in the command prompt:  
```npm install --global mocha```

- ### Integration tests
An example of integration test was created for cypress (toDoList.js)

The express module is used for managing the connection to the mysql database and to send SQL request to the mysql database.  
The official documentation is available here: [cypress](https://docs.cypress.io "cypress official website")

