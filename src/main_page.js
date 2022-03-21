let dt = require('./DisplayTask')
let fd = require('./format_data')

function displayMainPage(results) {

    let mainPage = `
<!DOCTYPE html>
<html>
    ${insertHead()}
    <body>
        ${constructContainer(results)}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        ${fetchImage("Mekboy.png")}
  
        
    </body>

</html>
    `
    return mainPage
}


//Construction de l'Head
function insertHead() {
    let html = `
    <head>
        <title>DA TASK MANAGER</title>

        <link rel="stylesheet" href="./main_page.css">
        <link rel="stylesheet" href="./style.css">

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">


    </head>`

    return html
}

//Main page bootstrap container creation
function constructContainer(results) {
    let html = `
        <div id="container" class="container">
            <br />
            ${headerCreation()}
            <br/>
            ${functionalityBar()}
            
            <br/>
            ${fetchOngoingTask()}
            ${fetchViewAllTask()}
            ${fetchViewDoneTask()}
            ${fetchViewOngoingTask()}
            ${fetchViewBlockedTask()}

        </div>
    `

    return html
}

//Main page Header management
function headerCreation() {
    let html = `
            <div id="header" class="row bg-primary text-white rounded-pill ">
                <div class="col-1 align-self-center">
                    <picture>
                        <img id="imgHeader" class="rounded-circle img-fluid m-2" style="height: 90%;">
                    </picture>
                </div>
                <div class="col-11 align-self-center">
                    <h1 class="text-center display-2">
                        <strong>DA APPZ ZAT PLANZ</strong>
                    </h1>
                </div>
            </div>
    `

    return html
}

//Main page Functionalities bar button
function functionalityBar() {
    let html = `
            <div id="functionbar" class="row ">
                <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                    ${newTaskButton()}
                    ${buttonViewAllTask()}
                    ${buttonViewOngoingTask()}
                    ${buttonViewBlockedTask()}
                    ${buttonViewDoneTask()}

                </div>
            </div>
    `

    return html
}

//Button for adding a new task and the related form to add it
function newTaskButton() {
    let html = `

                <!-- Button trigger modal -->
                    <div>
                        <button type="button" class="btn btn-secondary btn-lg" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            Add a task
                        </button>
                    </div>


                    <!-- Modal -->
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="staticBackdropLabel">New task</h5>
                                    
                                </div>
                                <div class="modal-body">
                                   ${taskForm()}
                                </div>
                            </div>
                        </div>
                    </div>
        `
    return html
}

function taskForm(){
    let html = `
        <form method="post" action="/addTask" enctype="application/x-www-form-urlencoded">
            <div class="form-group">
                <label for="addnewtask">Task name:</label>
                <input required name="taskname" class="form-control" id="addnewtask" placeholder="name of the task">
            </div>
            <div class="form-group">
                <label for="taskdescription">Task description:</label>
                <textarea name="taskdescription" class="form-control" id="taskdescription" rows="5"></textarea>
            </div>
            
            <div class="form-group">
                <div class="row justify-content-center">
                    <div>
                        <label for="startDate">Start date:</label>
                        <input required min="${fd.formatDate(new Date())}" name="startdate" id="startDate" class="form-control"  type="date" />
                        <span id="startDateSelected"></span>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <div class="row justify-content-center">
                    <div>
                        <label for="estimatedenddate">Estimated end date:</label>
                        <input required min="${fd.formatDate(new Date())}" name="estimatedenddate" id="estimatedenddate" class="form-control" type="date" />
                        <span id="estimatedEndDateSelected"></span>
                    </div>
                </div>
            </div>
            <br />

            <button type="submit" class="btn btn-primary">Submit</button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        </form>
    `

    return html
}

function buttonViewAllTask() {
    let html = `
        <div>
            <button id="viewAllTask" class="btn btn-dark btn-lg">
                View All Tasks
            </button>
        </div>
    `
    return html
}

function buttonViewOngoingTask() {
    let html = `
        <div>
            <button id="viewOngoingTask" class="btn btn-primary btn-lg">
                View Ongoing Tasks
            </button>
        </div>
    `
    return html
}

function buttonViewDoneTask() {
    let html = `
        <div>
            <button id="viewDoneTask" class="btn btn-success btn-lg">
                View Done Tasks
            </button>
        </div>
    `
    return html
}

function buttonViewBlockedTask() {
    let html = `
        <div>
            <button id="viewBlockedTask" class="btn btn-warning btn-lg">
                View Blocked Tasks
            </button>
        </div>
    `
    return html
}

function fetchImage(image) {
    let html = `    
    <script>
                    
        var myImage = document.getElementById('imgHeader');
        var myRequest = new Request('${image}');

        fetch(myRequest)
        .then(function(response) {
            if (!response.ok) {
                throw new Error("HTTP error, status = " + response.status);
            }
            return response.blob();
        })
        .then(function(myBlob) {
            var objectURL = URL.createObjectURL(myBlob);
            myImage.src = objectURL;
        })
        .catch(function(error) {
            var p = document.createElement('p');
            p.appendChild(
                document.createTextNode('Error: ' + error.message)
            );
            document.body.insertBefore(p, myImage);
        });
    </script>
    `
    return html
}

function fetchOngoingTask() {
    let html = `    
    <script>
        var htmlinsertionpoint = document.getElementById('functionbar');
        var myRequest = new Request('/fetchdata');

        ${fetchRequest()}

    </script>
    `
    return html
}

function fetchViewAllTask(){
    let html = `
    <script>
        let buttonAll = document.getElementById("viewAllTask")
        buttonAll.addEventListener("click", (event) => {
            let contentToRemove = document.getElementById("taskBox")
            taskBox.remove()
            var htmlinsertionpoint = document.getElementById('functionbar');
            var myRequest = new Request('/viewAlltask');

            ${fetchRequest()}

        })
    </script>
    `
    return html
}



function fetchViewOngoingTask(){
    let html = `
    <script>
        let buttonOngoing = document.getElementById("viewOngoingTask")
        buttonOngoing.addEventListener("click", (event) => {
            let contentToRemove = document.getElementById("taskBox")
            taskBox.remove()
            var htmlinsertionpoint = document.getElementById('functionbar');
            var myRequest = new Request('/fetchdata');

            ${fetchRequest()}

        })
    </script>
    `
    return html
}


function fetchViewDoneTask(){
    let html = `
    <script>
        let button = document.getElementById("viewDoneTask")
        button.addEventListener("click", (event) => {
            let contentToRemove = document.getElementById("taskBox")
            taskBox.remove()
            var htmlinsertionpoint = document.getElementById('functionbar');
            var myRequest = new Request('/viewdonetask');

            ${fetchRequest()}

        })
    </script>
    `
    return html
}

function fetchViewBlockedTask(){
    let html = `
    <script>
        let buttonViewBlockedTask = document.getElementById("viewBlockedTask")
        buttonViewBlockedTask.addEventListener("click", (event) => {
            let contentToRemove = document.getElementById("taskBox")
            taskBox.remove()
            var htmlinsertionpoint = document.getElementById('functionbar');
            var myRequest = new Request('/viewBlockedtask');

            ${fetchRequest()}

        })
    </script>
    `
    return html
}

function fetchRequest () {
    let html =`
            fetch(myRequest)
            .then(function(response) {
                if (!response.ok) {
                    throw new Error("HTTP error, status = " + response.status);
                }
                return response.text();
            })
            .then(function(myhtml) {  
                htmlinsertionpoint.insertAdjacentHTML('afterend',myhtml)
            })
            .catch(function(error) {
                var p = document.createElement('p');
                p.appendChild(
                    document.createTextNode('Error: ' + error.message)
                );
                document.body.insertBefore(p, button);
            });
    `

    return html
}


module.exports = {
    displayMainPage: displayMainPage
}

    