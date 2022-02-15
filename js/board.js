let todos = [{
    'id': 0,
    'title': 'Programmieren',
    'category': 'Studium',
    'status': 'toDo'
}, {
    'id': 1,
    'title': 'Lesen',
    'category': 'Studium',
    'status': 'doToday'
}, {
    'id': 2,
    'title': 'Aufräumen',
    'category': 'Home',
    'status': 'testing'
}, {
    'id': 3,
    'title': 'Kochen',
    'category': 'Home',
    'status': 'done'
}];
let todoTasks = [];


let currentDraggedElement;

async function loadTasksForBoard() {
    await loadTasks();
    checkStatus();
}


/**
 * This function is used to check if status is 'todo'.
 */
function checkStatus() {
    if (tasks.length != 0) {
        todoTasks = tasks.filter((task) => task.status == 'todo');
        console.log(todoTasks);
    } else {
        console.log('There are no TODO-Tasks');
    }
}

function updateHTML() {
    // let clearAllTasks = () => {document.getElementsByClassName('tasks').innerHTML = ''};
    filterGenerateTodoHTML();
    filterGenerateDoTodayHTML();
    filterGenerateTestingHTML();
    filterGenerateDoneHTML();
}


function filterGenerateTodoHTML() {
    let toDo = todos.filter(t => t['status'] == 'toDo');
    document.getElementById('toDo').innerHTML = '';
    for (let index = 0; index < toDo.length; index++) {
        let element = toDo[index];
        document.getElementById('toDo').innerHTML += generateTasksHTML(element);
    }
}


function filterGenerateDoTodayHTML() {
    let doToday = todos.filter(t => t['status'] == 'doToday');
    document.getElementById('doToday').innerHTML = '';
    for (let index = 0; index < doToday.length; index++) {
        let element = doToday[index];
        document.getElementById('doToday').innerHTML += generateTasksHTML(element);
    }
}


function filterGenerateTestingHTML() {
    let testing = todos.filter(t => t['status'] == 'testing');
    document.getElementById('testing').innerHTML = '';
    for (let index = 0; index < testing.length; index++) {
        let element = testing[index];
        document.getElementById('testing').innerHTML += generateTasksHTML(element);
    }
}


function filterGenerateDoneHTML() {
    let done = todos.filter(t => t['status'] == 'done');
    document.getElementById('done').innerHTML = '';
    for (let index = 0; index < done.length; index++) {
        let element = done[index];
        document.getElementById('done').innerHTML += generateTasksHTML(element);
    }
}


function generateTasksHTML(element) {
    return `<div draggable="true" ondragstart="startDragging(${element['id']})" class="tasks"> ${element['title']}</div>`;
}


function startDragging(id) {
    currentDraggedElement = id;

}


/**
 * enables to drop containers on other container
 * for documentation see >>>> https://www.w3schools.com/html/html5_draganddrop.asp
 * @param {Event} ev 
 */
function allowDrop(ev) {
    ev.preventDefault();
}


function moveTo(status) {
    todos[currentDraggedElement]['status'] = status; // z.B Todo mit id 1: das Feld Status ändert sich zu einem anderen status.
    updateHTML();
}


function highlight(id) {
    document.getElementById(id).classList.add('drag-area-highlight');
}


function removeHighlight(id) {
    document.getElementById(id).classList.remove('drag-area-highlight');
}