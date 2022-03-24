var mysql = require('mysql');
const fd = require('./../src/format_data')
const { NULL } = require('mysql/lib/protocol/constants/types');


function connectToMySQL() {
  var connection = mysql.createConnection({
    host: 'localhost',
    user: '<my_database_user>',
    password: '<my_database_password>',
    database: 'todolist'
  });

  connection.connect();

  return connection
}

function dbGetAllTasks(fonction_traitement_resultat_bdd) {
  let connection = connectToMySQL()
  let query = "SELECT * FROM tasks ORDER BY startdate DESC, estimatedenddate ASC"

  connection.query(query, fonction_traitement_resultat_bdd)
  connection.end();
}

function dbGetTasksOngoing(fonction_traitement_resultat_bdd) {
  let taskstatus = fd.NUM_ONGOING_TASK
  let connection = connectToMySQL()
  let query = "SELECT * FROM tasks WHERE taskstatus = ? ORDER BY startdate DESC, estimatedenddate ASC"

  connection.query(query, taskstatus, fonction_traitement_resultat_bdd)
  connection.end();
}

function dbGetTasksDone(fonction_traitement_resultat_bdd) {

  let connection = connectToMySQL()
  let taskstatus = fd.NUM_DONE_TASK
  let query = "SELECT * FROM tasks WHERE taskstatus = ? ORDER BY startdate DESC, estimatedenddate ASC"
  //console.log("Task done query; ", query)
  connection.query(query, taskstatus, fonction_traitement_resultat_bdd)
  connection.end();
}

function dbGetTasksBlocked(fonction_traitement_resultat_bdd) {

  let connection = connectToMySQL()
  let taskstatus = fd.NUM_BLOCKED_TASK
  let query = "SELECT * FROM tasks WHERE taskstatus = ? ORDER BY  startdate DESC, estimatedenddate ASC"
  //console.log("Task done query; ", query)
  connection.query(query, taskstatus, fonction_traitement_resultat_bdd)
  connection.end();
}


function dbAddTask(dataToAdd, fonction_traitement_data) {
  //console.log("Data to add : ", dataToAdd)
  //console.log("taskname: ", dataToAdd["taskname"])

  let values = [dataToAdd["taskname"], dataToAdd["taskdescription"], dataToAdd["startdate"], dataToAdd["estimatedenddate"], fd.NUM_ONGOING_TASK]
  let connection = connectToMySQL()
  let query = "INSERT INTO tasks (taskname, taskdescription, startdate, estimatedenddate, taskstatus) VALUES (?, ?, ?, ?, ?)"

  if (dataToAdd["estimatedenddate"] == '') {
    values = [dataToAdd["taskname"], dataToAdd["taskdescription"], dataToAdd["startdate"], fd.NUM_ONGOING_TASK]
    query = "INSERT INTO tasks (taskname, taskdescription, startdate, taskstatus) VALUES (?, ?, ?, ?)"
  }
  connection.query(query, values, fonction_traitement_data)
  connection.commit()
  connection.end()
}

function dbModifyTask(dataToModify, fonction_traitement_data) {
  //console.log("Data to modify : ", dataToModify)
  //console.log("taskname: ", dataToAdd["taskname"])
  let status = fd.formatTaskStatusTextToNumber(dataToModify["taskstatus"])
  let values = [dataToModify["taskname"], dataToModify["taskdescription"], dataToModify["startdate"], dataToModify["estimatedenddate"], status, dataToModify["idtask"]]
  let connection = connectToMySQL()
  let query = "UPDATE tasks SET taskname = ?, taskdescription  = ?, startdate  = ?, estimatedenddate  = ?, taskstatus  = ? WHERE idtask = ?"
  //console.log("Query modify: ", values)
  connection.query(query, values, fonction_traitement_data)
  connection.commit()
  connection.end()
}


function dbUpdateTaskDone(idTask, fonction_traitement_data) {
  let values = [fd.NUM_DONE_TASK, fd.formatDate(new Date()), parseInt(idTask)]
  let connection = connectToMySQL()
  let query = 'UPDATE tasks  SET taskstatus = ?, taskcloseddate= ? WHERE idtask = ?'

  connection.query(query, values, fonction_traitement_data)
  connection.commit()
  connection.end()
}

function dbReopenTaskDone(idTask, fonction_traitement_data) {
  let values = [fd.NUM_ONGOING_TASK, parseInt(idTask)]
  let connection = connectToMySQL()
  let query = 'UPDATE tasks  SET taskstatus = ? WHERE idtask = ?'

  connection.query(query, values, fonction_traitement_data)
  connection.commit()
  connection.end()
}

module.exports = {
  dbGetTasksDone: dbGetTasksDone,
  dbAddTask: dbAddTask,
  dbUpdateTaskDone: dbUpdateTaskDone,
  dbGetTasksOngoing: dbGetTasksOngoing,
  dbModifyTask: dbModifyTask,
  dbGetTasksBlocked: dbGetTasksBlocked,
  dbGetAllTasks: dbGetAllTasks,
  dbReopenTaskDone: dbReopenTaskDone

}
