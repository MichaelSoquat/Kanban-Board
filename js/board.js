let todoTasks = [];
let doToday = [];
let testing = [];
let done = [];
let currentDraggedElement;
let isBoardEmpty = false;


function checkIfBoardIsEmpty() {
    if (todoTasks.length == 0 && doToday.length == 0 && testing.length == 0 && done.length == 0) {
        isBoardEmpty = true;
    }
    else {
        isBoardEmpty = false;
    }
}


async function loadTasksForBoard() {
    loadUser();
    changeImg();
    includeHTML();
    await loadTasks();
    filterTasks();
    checkIfBoardIsEmpty();
    renderBoardHTML();
}


function renderBoardHTML() {
    if (isBoardEmpty == true) {
        document.getElementById('todo').innerHTML = helpTextForEmptyBoard;
        console.log('board is empty');
    } else {
        renderToDos();
        renderDoToday();
        renderTesting();
        renderDone();
    }
}

function filterTasks() {
    todoTasks = tasks.filter(t => t['status'] == 'todo');
    doToday = tasks.filter(t => t['status'] == 'doToday');
    testing = tasks.filter(t => t['status'] == 'testing');
    done = tasks.filter(t => t['status'] == 'done');
}

function renderToDos() {
    document.getElementById('todo').innerHTML = '';

    for (let index = 0; index < todoTasks.length; index++) {
        let element = todoTasks[index];
        element["boardId"] = tasks.indexOf(element);
        document.getElementById('todo').innerHTML += generateTasksHTML(element);
    }
}


function renderDoToday() {
    document.getElementById('doToday').innerHTML = '';

    for (let index = 0; index < doToday.length; index++) {
        let element = doToday[index];
        element["boardId"] = tasks.indexOf(element);
        document.getElementById('doToday').innerHTML += generateTasksHTML(element);
    }
}


function renderTesting() {
    document.getElementById('testing').innerHTML = '';

    for (let index = 0; index < testing.length; index++) {
        let element = testing[index];
        element["boardId"] = tasks.indexOf(element);
        document.getElementById('testing').innerHTML += generateTasksHTML(element);
    }
}


function renderDone() {
    document.getElementById('done').innerHTML = '';

    for (let index = 0; index < done.length; index++) {
        let element = done[index];
        element["boardId"] = tasks.indexOf(element);
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



let helpTextForEmptyBoard = `<p>At the moment there are no tasks in board. Please assign a new task in <a href="backlog.html">Backlog</a>. If you need help, then visit our <a href="help.html">Help-Section</a> .</p>`;


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
    filterTasks();
    renderBoardHTML();
}



function highlight(id) {
    document.getElementById(id).classList.add('drag-area-highlight');
}


function removeHighlight(id) {
    document.getElementById(id).classList.remove('drag-area-highlight');
}