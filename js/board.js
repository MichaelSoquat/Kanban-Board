let todoTasks = [];
let doToday = [];
let testing = [];
let done = [];
let zero = 0;

let boardTasks = [];


let currentDraggedElement;

async function loadTasksForBoard() {
    includeHTML();
    await loadTasks();
    boardTasks = tasks;
    loadUser();
    changeImg();
    updateHTML();
}



function updateHTML() {
    filterGenerateTodoHTML();
    filterGenerateDoTodayHTML();
    filterGenerateTestingHTML();
    filterGenerateDoneHTML();
}


function filterGenerateTodoHTML() {
    todoTasks = boardTasks.filter(t => t['status'] == 'todo');
    document.getElementById('todo').innerHTML = '';
    for (let index = 0; index < todoTasks.length; index++) {
        let element = todoTasks[index];
        element["boardId"] = boardTasks.indexOf(element);
        document.getElementById('todo').innerHTML += generateTasksHTML(element);
    }


function filterGenerateDoTodayHTML() {
    doToday = boardTasks.filter(t => t['status'] == 'doToday');
    document.getElementById('doToday').innerHTML = '';
    for (let index = 0; index < doToday.length; index++) {
        let element = doToday[index];
        element["boardId"] = boardTasks.indexOf(element);
        document.getElementById('doToday').innerHTML += generateTasksHTML(element);
    }
}


function filterGenerateTestingHTML() {
    testing = boardTasks.filter(t => t['status'] == 'testing');
    document.getElementById('testing').innerHTML = '';
    for (let index = 0; index < testing.length; index++) {
        let element = testing[index];
        element["boardId"] = boardTasks.indexOf(element);
        document.getElementById('testing').innerHTML += generateTasksHTML(element);
    }
}


function filterGenerateDoneHTML() {
    done = boardTasks.filter(t => t['status'] == 'done');
    document.getElementById('done').innerHTML = '';
    for (let index = 0; index < done.length; index++) {
        let element = done[index];
        element["boardId"] = boardTasks.indexOf(element);
        document.getElementById('done').innerHTML += generateTasksHTML(element);
    }
}


function generateTasksHTML(element) {
    return `<!--html--> 
    <div draggable="true" ondragstart="startDragging(${element['boardId']})" class="tasks">
        <h3>${element['title']}</h3> 
        <p>${element['description']}</p>
        <img class="user-img" src="${element.assignedTo.img}">
        <p>${element['category']}</p>
    </div>`;
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


async function moveTo(status) {
    tasks[currentDraggedElement]['status'] = status; // z.B Todo mit id 1: das Feld Status ändert sich zu einem anderen status.
    await saveTasks();
    boardTasks = tasks;
    updateHTML();
}



function highlight(id) {
    document.getElementById(id).classList.add('drag-area-highlight');
}


function removeHighlight(id) {
    document.getElementById(id).classList.remove('drag-area-highlight');
}