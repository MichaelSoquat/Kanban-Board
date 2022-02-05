let newTask = {
    'status': 'backlog',
    'title': '...',
    'date': '2022-02-05',
    'category': 'Management',
    'urgency': 'low',
    'description': '......',
    'assignedTo': 'Michael',
    'img': 'img...'
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
    showTasksInBacklog();
};

/**
 * This function is generating Tasks.
 * If there are no tasks it shows a help text.
 */
function showTasksInBacklog() {
    let taskGenerate = document.getElementById('tasks');
    if (statusBacklog.length == 0) {
        taskGenerate.innerHTML = `<p>At the moment there is no task to show. Please add a new task in <a href="add-task.html">Add Task</a>
        . If you need help, then visit our <a href="help.html">Help-Section</a> .</p>`;
    } else {
        for (i = 0; i < statusBacklog.length; i++) {
            taskGenerate.innerHTML += `Test`;
        }
    }
}

