const express = require('express')
const app = express()
const port = 3000
const mainPage = require('./src/main_page')
const dbmysql = require("./db_management/db_utils_mysql")
const dt = require("./src/DisplayTask")

app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))


app.listen(port, () => {
  console.log(`Task manager app listening on port ${port}`)
})

app.get('/', (req, res) => {
  dbmysql.dbGetTasksOngoing(

    function (error, results, fields) {
      let html = mainPage.displayMainPage(results)
      res.send(html)
    }
  )
})


app.get('/fetchdata', (req, res) => {
  dbmysql.dbGetTasksOngoing(

    function (error, results, fields) {
      let html = dt.displayTasksBox(results)
      res.send(html)
    }
  )
})

app.post('/addTask', function (req, res) {
  dbmysql.dbAddTask(req.body,
    function (error, results, field) {
      if (error) {
        console.log(error)
      }
      res.redirect('/')
    })
})

app.post('/modifyTask', function (req, res) {
  dbmysql.dbModifyTask(req.body,
    function (error, results, field) {
      if (error) {
        console.log(error)
      }
      res.redirect('/')
    })
})

app.get('/viewdonetask', (req, res) => {
  dbmysql.dbGetTasksDone(
    function (error, results, field) {
      if (error) {
        console.log(error)
      }
      let html = dt.displayTasksBox(results)
      res.send(html)
    })
})

app.get('/viewBlockedtask', (req, res) => {
  dbmysql.dbGetTasksBlocked(
    function (error, results, field) {
      if (error) {
        console.log(error)
      }
      let html = dt.displayTasksBox(results)
      res.send(html)
    })
})

app.get('/viewAlltask', (req, res) => {
  dbmysql.dbGetAllTasks(
    function (error, results, field) {
      if (error) {
        console.log(error)
      }
      let html = dt.displayTasksBox(results)
      res.send(html)
    })
})

app.post('/doneTask', function (req, res) {
  dbmysql.dbUpdateTaskDone(req.body['idtask'],
    function (error, results, field) {
      if (error) {
        console.log(error)
      }
      res.redirect('/')
    })
})

app.post('/reopenDoneTask', function (req, res) {
  dbmysql.dbReopenTaskDone(req.body['idtask'],
    function (error, results, field) {
      if (error) {
        console.log(error)
      }
      res.redirect('/')
    })
})





