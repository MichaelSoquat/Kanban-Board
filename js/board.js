/* let todos = [{
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
}]; */
let todoTasks = [];
let doToday = [];
let testing = [];
let done = [];
let zero = 0;


let currentDraggedElement;

async function loadTasksForBoard() {
    await loadTasks();
    updateHTML();
}


/**
 * This function is used to check if status is 'todo'.
 */
/* function checkIfStatusIsTodo() {
    if (tasks.length != 0) {
        todoTasks = tasks.filter((task) => task.status == 'todo');
        console.log(todoTasks);
    } else {
        console.log('There are no TODO-Tasks');
    }
} */


function updateHTML() {
    filterGenerateTodoHTML();
    filterGenerateDoTodayHTML();
    filterGenerateTestingHTML();
    filterGenerateDoneHTML();
}


function filterGenerateTodoHTML() {
    todoTasks = tasks.filter(t => t['status'] == 'todo');
    document.getElementById('toDo').innerHTML = '';
    for (let index = 0; index < todoTasks.length; index++) {
        let element = todoTasks[index];
        element["boardId"] = index;
        document.getElementById('toDo').innerHTML += generateTasksHTML(element);
    }
/*     for (let index = 0; index < tasks.length; index++) {
        checkBoardStatus(index, 'todo');
        
    }  */
}

/* function checkAgainBoardStatus(status) {
    if (tasks[zero]['status'] == status) {
        tasks.shift();
        console.log('Spliced task after MissingCheck is:' + tasks.length)
    } 
}

function checkBoardStatus(index, status) {
    if (tasks[index]['status'] == status) {
        tasks.splice(index,1);
        console.log('Spliced task after BoardStatuschek is:' + tasks.length)
    }
    checkAgainBoardStatus(status); 
}  */

function filterGenerateDoTodayHTML() {
    doToday = tasks.filter(t => t['status'] == 'doToday');
    document.getElementById('doToday').innerHTML = '';
    for (let index = 0; index < doToday.length; index++) {
        let element = doToday[index];
        document.getElementById('doToday').innerHTML += generateTasksHTML(element);
    }
}


function filterGenerateTestingHTML() {
    testing = tasks.filter(t => t['status'] == 'testing');
    document.getElementById('testing').innerHTML = '';
    for (let index = 0; index < testing.length; index++) {
        let element = testing[index];
        document.getElementById('testing').innerHTML += generateTasksHTML(element);
    }
}


function filterGenerateDoneHTML() {
    done = tasks.filter(t => t['status'] == 'done');
    document.getElementById('done').innerHTML = '';
    for (let index = 0; index < done.length; index++) {
        let element = done[index];
        document.getElementById('done').innerHTML += generateTasksHTML(element);
    }
}


function generateTasksHTML(element) {
    return `<!--html--> 
    <div draggable="true" ondragstart="startDragging(${element['boardId']})" class="tasks">
        <h3>${element['title']}</h3> 
        <p>${element['description']}</p>
        <img class="user-img" src="${element.assignedTo.img}">
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


function moveTo(status) {
    todoTasks[currentDraggedElement]['status'] = status; // z.B Todo mit id 1: das Feld Status ändert sich zu einem anderen status.
    updateHTML();
}

function saveBoardID() {
    
}


function highlight(id) {
    document.getElementById(id).classList.add('drag-area-highlight');
}


function removeHighlight(id) {
    document.getElementById(id).classList.remove('drag-area-highlight');
}