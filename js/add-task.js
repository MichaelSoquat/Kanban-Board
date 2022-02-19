let tasks = [];
let employeeImg;
let employeeName;
let employeeEmail;
let employeeColor;
let employeeChoosen = false;

/**
 * This function is used to set the data from the selecteted employee into the variables.
 * 
 * @param {string} img - This is the src for the image of the employee.
 * @param {string} name - This is the name of the employee.
 * @param {string} email - This is the email adress of the employee.
 */
function setEmployee(img, name, email, color) {
    employeeChoosen = true;
    employeeImg = img;
    employeeName = name;
    employeeEmail = email;
    employeeColor = color;
    document.getElementById('choosenEmployee').src = img;
    document.getElementById('chooseEmployee').classList.toggle('d-none');
}

/**
 * This fuction is used to show the date in the input field.
 */
function pushDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById('dateInput').value = today;
}

/** 
 * This function is used to create a JSON with the informatios of the new task.
 */
function setNewTask() {
    let title = document.getElementById('titleInput');
    let category = document.getElementById('categoryInput');
    let description = document.getElementById('descriptionInput');
    let date = document.getElementById('dateInput');
    let urgency = document.getElementById('urgencyInput');
    let status = 'backlog';
    let newTask = {
        'status': status,
        'title': title.value,
        'date': date.value,
        'category': category.value,
        'urgency': urgency.value,
        'description': description.value,
        'id': new Date().getTime(),
        'assignedTo': checkEmployeeChoosen()
    };
    tasks.push(newTask);
    saveTasks();
    console.log(tasks)
    clearInput();
    document.getElementById('linkToBacklog').classList.remove('d-none');
}

/**
 * This function is used to generate a JSON for assignedTo: , The return depends of the employee is selected or not.
 * @returns JSON with Placeholder values or the values of the selected employee.
 */
function checkEmployeeChoosen() {
    if (employeeChoosen == false) {
        return {
            'img': './img/faviconblau.ico',
            'name': 'no employee selected',
            'email': 'no employee selected',
            'color': 'green'
        }
    };
    if (employeeChoosen == true) {
        return {
            'img': employeeImg,
            'name': employeeName,
            'email': employeeEmail,
            'color': employeeColor
        }
    };
}

/**
 * This function is used to clear all the input fields.
 */
function clearInput() {
    let title = document.getElementById('titleInput');
    let category = document.getElementById('categoryInput');
    let description = document.getElementById('descriptionInput');
    let date = document.getElementById('dateInput');
    let urgency = document.getElementById('urgencyInput');

    title.value = '';
    date.value = '';
    category.value = '';
    urgency.value = '';
    description.value = '';
}

/**
 * This function is used to appear/disappear the container with the employees to select.
 */
function showEmpleyees() {
    document.getElementById('chooseEmployee').classList.toggle('d-none');
}