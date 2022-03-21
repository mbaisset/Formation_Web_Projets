const NUM_ONGOING_TASK = 0
const NUM_BLOCKED_TASK = 1
const NUM_DONE_TASK = 2

const TEXTE_ONGOING_TASK = "Ongoing"
const TEXTE_BLOCKED_TASK = "Blocked"
const TEXTE_DONE_TASK = "Done"



function formatTaskStatusNumberToText(taskValue) {
    switch (taskValue) {
        case NUM_ONGOING_TASK:
            taskValue = TEXTE_ONGOING_TASK
            return taskValue

        case NUM_BLOCKED_TASK:
            taskValue = TEXTE_BLOCKED_TASK
            return taskValue

        case NUM_DONE_TASK:
            taskValue = TEXTE_DONE_TASK
            return taskValue

        default:
            taskValue = TEXTE_ONGOING_TASK
            return taskValue
    }
}

function formatTaskStatusTextToNumber(taskValue) {
    switch (taskValue) {
        case TEXTE_ONGOING_TASK:
            taskValue = NUM_ONGOING_TASK
            return taskValue

        case TEXTE_BLOCKED_TASK:
            taskValue = NUM_BLOCKED_TASK
            return taskValue

        case TEXTE_DONE_TASK:
            taskValue = NUM_DONE_TASK
            return taskValue

        default:
            taskValue = NUM_ONGOING_TASK
            return taskValue
    }
}

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}


function formatDate(date) {
    return [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
    ].join('-');
}




module.exports = {
    formatTaskStatusNumberToText: formatTaskStatusNumberToText,
    formatTaskStatusTextToNumber: formatTaskStatusTextToNumber,
    NUM_ONGOING_TASK: NUM_ONGOING_TASK,
    NUM_BLOCKED_TASK: NUM_BLOCKED_TASK,
    NUM_DONE_TASK: NUM_DONE_TASK,
    TEXTE_ONGOING_TASK: TEXTE_ONGOING_TASK,
    TEXTE_BLOCKED_TASK: TEXTE_BLOCKED_TASK,
    TEXTE_DONE_TASK: TEXTE_DONE_TASK,
    formatDate: formatDate
}


