let newTaskTest = [];
let employeeImg;
let employeeName;
let employeeEmail;

/**
 * This function is used to set the data from the selecteted employee into the variables.
 * 
 * @param {string} img - This is the src for the image of the employee.
 * @param {string} name - This is the name of the employee.
 * @param {string} email - This is the email adress of the employee.
 */
function setEmployee(img, name, email) {
    employeeImg = img;
    employeeName = name;
    employeeEmail = email;
    document.getElementById('choosenEmployee').src = img;
    document.getElementById('chooseEmployee').classList.toggle('d-none');
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
        'assignedTo': [{
            'img': employeeImg,
            'name': employeeName,
            'email': employeeEmail
        }]
    };
    console.log(newTask);

    newTaskTest.push(newTask);
    //console.log(newTaskTest);
    //clearInput();
}

/**
 * This function is used to clear all the input fields.
 */
function clearInput() {
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