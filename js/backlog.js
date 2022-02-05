
/**
* This function is used to wait for loading the tasks from server.
*/

async function init() {
    await loadTasks();
    testWorkingBackend();
}


// test
function testWorkingBackend() {
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

    tasks.push(newTask);
};

