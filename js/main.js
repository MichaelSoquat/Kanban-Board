let currentUser;

/**
 * This function is used to add the html templates
 * For Documentation look at >>> https://www.w3schools.com/howto/howto_html_include.asp
 * @returns 
 */
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
};

/**
 * smallestBackendEver
 * This function is used to add a simple backend for the tasks
 * For Documentation look at >>> https://github.com/JunusErgin/smallest_backend_ever 
 */
setURL('http://gruppe-176.developerakademie.net/smallest_backend_ever');

/**
 * This function is used to save the tasks to server.
 */
async function saveTasks() {
    // users.push('John');
    await backend.setItem('tasks', JSON.stringify(tasks));
};

/**
 * This function is used to load the tasks from server.
 */
async function loadTasks() {
    await downloadFromServer();
    tasks = JSON.parse(backend.getItem('tasks')) || [];
};

/**
 * This function is used to save the user that has logged in.
 */
async function saveUser() {
    await backend.setItem('user', JSON.stringify(user));
}

/**
 * This function is used to load the user from server.
 */
async function loadUser() {
    await downloadFromServer();
    user = JSON.parse(backend.getItem('user')) || [];
};

/**
 * This function is used to change the image in the menu to the image of the user that has logged in.
 */
async function changeImg() {
    await loadUser();
    currentUser = user[user.length - 1];
    if (currentUser == 'michael-soquat') {
        document.getElementById('menuImg').src = "./img/Soquat.png";
    }
    if (currentUser == 'rinat-madreiter') {
        document.getElementById('menuImg').src = "./img/rinat.jpg";
    }
    if (currentUser == 'daniel-johannsen') {
        document.getElementById('menuImg').src = "./img/daniel.jpg";
    }
};

/**
 * This function is used to show the dropdown menu.
 */
function dropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
};