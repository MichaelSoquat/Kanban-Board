let statusBacklog = 'backlog';
let backlog = [];

/**
* This function is used to wait for loading the tasks from server.
*/

async function init() {

    
    
    await testWorkingBackend();
    // await loadTasks();
    // tasks.splice(0, 1);               //only for testing!!!
    // saveTasks();
    checkStatus();
}


// test
async function testWorkingBackend() {
    await loadTasks();
    let id=tasks.length;
    
    let newTask = {
        'id': id,
        'status': 'backlog',
        'title': '...',
        'date': '2022-02-05',
        'category': 'Management',
        'urgency': 'low',
        'description': 'Hello, this is a Test. Hello, this is a Test. Hello, this is a Test. Hello, this is a Test. Hello, this is a Test. Hello, this is a Test. Hello, this is a Test. Hello, this is a Test. ',
        'assignedTo': 'Michael',
        'name': 'Michael',
        'img': './img/Soquat.jpg',
        'name': 'Michael Soquat',
        'email': 'michael.soquat@gmx.de'
    };
    console.log(newTask);
    tasks.push(newTask);
};


/**
 * This function is used to check if status is 'backlog'.
 */
function checkStatus() {
    backlog = [];
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
    taskGenerate.innerHTML = '';
    if (backlog.length == 0) {
        taskGenerate.innerHTML = showHelpText();
    } else {
        for (i = 0; i < backlog.length; i++) {
            document.getElementById('tasks').innerHTML += showTasksInBacklog();
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
    <div id="task${i}" class="backlog-task bg-lightblue">
    <div class="seperate-img-user"><div class="center-img"><img class="user-img" src="${backlog[i]['img']}"></div>
    <div class ="structure-assignment"><span>${backlog[i]['name']}</span><span>${backlog[i]['email']}</span></div>
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