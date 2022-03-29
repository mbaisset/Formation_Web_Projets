const fd = require('./format_data')


function displayTasksBox (results){
    let html = `<br/>
                
    `

    if (results.length == 0) {

        html = `${html}
                <div id="taskBox" class="row ">
                    <h1 class="text-center display-2">
                        <strong>No task to display</strong>
                    </h1>
            `

    } else {
        html = `${html} 
                <div id="taskBox" class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">`
        for (v in results){
            html = `${html} ${taskCard(results[v])}`

        }
    }       
    
    html = `${html} 
        </div>`
    return html
}


function taskCard (values){

    let readonlyField = ""
    if (values['taskstatus'] == fd.NUM_DONE_TASK){
        readonlyField = "readonly"
    }

    let cardBackground = manageCardBackground (values)


    let html = `
        <div class="col ">
            <div class="h-100 p-3 border ${cardBackground} rounded-3 ">
                <form method="post" enctype="application/x-www-form-urlencoded">
                    <div class="form-group" style="display: none;">
                        <input name="idtask" class="form-control" id="idtask" value="${values['idtask']}">
                    </div>
                    <div class="form-group">
                        <label for="taskname"><strong>Task name:</strong></label>
                        <input ${readonlyField} required name="taskname" class="form-control" id="taskname" value="${values['taskname']}">
                    </div>
                    <div class="form-group">
                        <label for="taskdescription"><strong>Task description:</strong></label>
                        <textarea ${readonlyField} required name="taskdescription" class="form-control" id="taskdescription" rows="5">${values['taskdescription']}</textarea>
                    </div>
                    <div class="form-group">
                        <div class="row justify-content-center">
                            <div>
                                <label for="startDateModifPossible"><strong>Start date:</strong></label>
                                <input ${readonlyField} required  name="startdate" id="startDateModifPossible" class="form-control" value="${fd.formatDate(new Date (values['startdate']))}" type="date" />
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="row justify-content-center">
                            <div>
                                <label for="estimatedEndDateModifPossible"><strong>Estimated end date:</strong></label>
                                <input ${readonlyField} required  name="estimatedenddate" id="estimatedEndDateModifPossible" class="form-control" value="${fd.formatDate(new Date (values['estimatedenddate']))}" type="date" />
                            </div>
                        </div>
                    </div>

    `

    if (values['taskstatus'] == fd.NUM_DONE_TASK){
        html = ` ${html}
            <div class="form-group">
                <div class="row justify-content-center">
                    <div>
                        <label for="taskcloseddate"><strong>Task closed date:</strong></label>
                        <input readonly name="taskcloseddate" id="taskcloseddate" class="form-control" value="${fd.formatDate(new Date (values['taskcloseddate']))}" type="date" />
                    </div>
                </div>
            </div>
            <br/>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button type="submit" formaction="/reopenDoneTask" class="btn btn-primary me-md-2" type="button">Reopen</button>
            </div>
        `
    } else {
        html = ` ${html} 


                <div class="form-group">
                    <label for="taskstatus"><strong>Task status</strong></label>
                    <select name="taskstatus" class="form-control" id="taskstatus">
                        <option selected>${fd.formatTaskStatusNumberToText(values['taskstatus'])}</option>
                        <option>Ongoing</option>
                        <option>Blocked</option>
                    </select>
                </div>
                <br/>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button type="submit" formaction="/modifyTask" class="btn btn-primary me-md-2" type="button">Modify</button>
                    <button type="submit" formaction="/doneTask" class="btn btn-primary">Done</button>
                </div>
            `
    }

    html = ` ${html}                    
                </form>
            </div>
        </div>
    `

    return html
}

function manageCardBackground (values){
    let cardBackground = ""

    switch (values.taskstatus) {
        case fd.NUM_ONGOING_TASK: 
            return "bg-light"

        case fd.NUM_BLOCKED_TASK:
            return "bg-warning"

        case fd.NUM_DONE_TASK:
            return "bg-success"
        
        default:
            return "bg-danger"
    }
}




module.exports={
    displayTasksBox: displayTasksBox
}