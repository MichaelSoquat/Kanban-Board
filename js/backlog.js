let newTask = {
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
}

let statusBacklog = [];
/**
* This function is used to wait for loading the tasks from server.
*/

async function init() {
    await loadTasks();
    testWorkingBackend();
    checkStatus();
}


// test
function testWorkingBackend() {
    console.log(newTask);
    tasks.push(newTask);
};


/**
 * This function is used to check if status is 'backlog'.
 */
function checkStatus() {
    if (tasks.length != 0) {
        statusBacklog = tasks.filter((task) => task.status === 'backlog');
    }
    showInBacklog();
};

/**
 * This function is generating text. If nothing in Backlog
 * it shows a help text. If there is something in Backlog
 * it creates a task.
 * 
 */

function showInBacklog() {
    let taskGenerate = document.getElementById('tasks');
    if (statusBacklog.length == 0) {
        taskGenerate.innerHTML = showHelpText();
    } else {
        for (i = 0; i < statusBacklog.length; i++) {
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
    <div class="seperate-img-user"><div class="center-img"><img class="user-img" src="${statusBacklog[i]['img']}"></div>
    <div class ="structure-assignment"><span>${statusBacklog[i]['name']}</span><span>${statusBacklog[i]['email']}</span></div>
    <div  class="move-category-to-center">${statusBacklog[i]['category']}</div></div> 
    <div class="description-container"><p>${statusBacklog[i]['description']}</p></div>
    <div class="icon-container"> <img class="icons" src ="./icons/plus-8-48.png"> 
    <img class="icons" src ="./icons/delete-48.png"></div></div> `;
};