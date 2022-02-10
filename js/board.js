let todos = [{
    'id': 0,
    'title': 'Programmieren',
    'category': 'Studium',
    'status': 'todo'
},{
    'id': 1,
    'title': 'Lesen',
    'category': 'Studium',
    'status': 'doToday'
},{
    'id': 2,
    'title': 'Aufräumen',
    'category': 'Home',
    'status': 'testing'
},{
    'id': 3,
    'title': 'Kochen',
    'category': 'Home',
    'status': 'done'
}];

/* todos
console.log(todos[1]) */


function updateHTML() {
    let clearAllTasks = () => {document.getElementsByClassName('tasks-container').innerHTML = '' }
    filterGenerateTodoHTML();
    filterGenerateDoTodayHTML();
    filterGenerateTestingHTML();
    filterGenerateDoneHTML();
}


function filterGenerateTodoHTML() {
    let toDo = todos.filter(t => t['status'] == 'todo');
    for (let index = 0; index < toDo.length; index++) {
        let currentTodo = toDo[index];
        document.getElementById('toDo').innerHTML += generateTodoHTML(currentTodo);
    }
}


function generateTodoHTML(currentTodo) {
    return `<div class="tasks"> ${currentTodo['title']}</div>`;
}

function filterGenerateDoTodayHTML() {
    let doToday = todos.filter(t => t['status'] == 'doToday');
    for (let index = 0; index < doToday.length; index++) {
        let currentDoToday = doToday[index];
        document.getElementById('doToday').innerHTML += generateDoTodayHTML(currentDoToday);
    }
}


function generateDoTodayHTML(currentDoToday) {
    return `<div class="tasks"> ${currentDoToday['title']}</div>`;
}

function filterGenerateTestingHTML() {
    let testing = todos.filter(t => t['status'] == 'testing');
    for (let index = 0; index < testing.length; index++) {
        let currentTesting = testing[index];
        document.getElementById('testing').innerHTML += generateTestingHTML(currentTesting);
    }
}


function generateTestingHTML(currentTesting) {
    return `<div class="tasks"> ${currentTesting['title']}</div>`;
}

function filterGenerateDoneHTML() {
    let done = todos.filter(t => t['status'] == 'done');
    for (let index = 0; index < done.length; index++) {
        let currentDone = done[index];
        document.getElementById('done').innerHTML += generateDoneHTML(currentDone);
    }
}


function generateDoneHTML(currentDone) {
    return `<div class="tasks"> ${currentDone['title']}</div>`;
}