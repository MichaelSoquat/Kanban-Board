let statusBacklog = 'backlog';
let backlog = [];

/**
* This function is used to wait for loading the tasks from server.
*/

function init() {
    loadTasksForBacklog();
}

async function loadTasksForBacklog() {
    await loadTasks();
    checkStatus();
};


/**
 * This function is used to check if status is 'backlog'.
 */

function checkStatus() {
    if (tasks.length != 0) {
        backlog = tasks.filter((task) => task.status == statusBacklog);
    }
    showInBacklog(backlog);

};

/**
 * This function is generating text. If nothing in Backlog
 * it shows a help text. If there is something in Backlog
 * it creates a task.
 * 
 */

function showInBacklog(backlog) {
    let taskGenerate = document.getElementById('tasks');
    if (backlog.length == 0) {
        taskGenerate.innerHTML = showHelpText();
    } else {
        for (i = 0; i < backlog.length; i++) {
            taskGenerate.innerHTML += showTasksInBacklog();
        }
    }
};

/**
 * This function creates the help text if nothing in Backlog.
 * @returns to showInBacklog()
 */

function showHelpText() {
    return `
    <p>At the moment there is no task to show. Please add a new task in <a href="add-task.html">Add Task</a>
        . If you need help, then visit our <a href="help.html">Help-Section</a> .</p>`;
};

/**
 * This function creates the task if there is something in Backlog.
 * @returns to showInBacklog()
 */

function showTasksInBacklog() {

    return `
    <div id="task${i}" style ="border-left:16px solid ${backlog[i]['assignedTo']['color']}" class="backlog-task bg-lightblue">
    <div class="seperate-img-user"><div class="center-img"><img class="user-img" src="${backlog[i]['assignedTo']['img']}"></div>
    <div class ="structure-assignment"><span>${backlog[i]['assignedTo']['name']}</span><span>${backlog[i]['assignedTo']['email']}</span></div>
    <div  class="move-category-to-center">${backlog[i]['category']}</div></div> 
    <div class="description-container"><p>${backlog[i]['description']}</p></div>
    <div class="icon-container"> <img onclick="addTaskToTodo(${backlog[i]['id']})" class="icons" src ="./icons/plus-8-48.png"> 
    <img onclick="deleteTaskFromJson(${backlog[i]['id']})" class="icons" src ="./icons/delete-48.png"></div></div> `;
};

/**
 * This function is adding the task to the Todo-Board.
 */

function addTaskToTodo(id) {
    document.getElementById('tasks').innerHTML = ``;
    for (i = 0; i < tasks.length; i++) {
        if (tasks[i]['id'] == id) {
            tasks[i]['status'] = 'todo';
        }
    }
    saveTasks();
    checkStatus();
};

/**
 * This function is deleting the task from Backlog.
 */

function deleteTaskFromJson(id) {
    document.getElementById('tasks').innerHTML = ``;
    for (i = 0; i < tasks.length; i++) {
        if (tasks[i]['id'] == id) {
            tasks.splice(i, 1);
        }
    }
    saveTasks();
    checkStatus();
};