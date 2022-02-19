let users = [{
        'username': 'michael-soquat',
        'password': 'gruppe-176'
    },
    {
        'username': 'rinat-madreiter',
        'password': 'gruppe-176'
    },
    {
        'username': 'daniel-johannsen',
        'password': 'gruppe-176'
    },
    {
        'username': 'test',
        'password': 'gruppe-176'
    }
];

let user = [];

/**
 * This function is used to check the login data from the user.
 */
function checkLogin() {
    let username = document.getElementById('username');
    let password = document.getElementById('password');

    for (let i = 0; i < users.length; i++) {
        let element = users[i];

        if (username.value == element['username'] &&
            password.value == element['password']) {
            user.push(username.value);
            saveUser();
            window.open('add-task.html');
        }
        if (username.value != element['username'] &&
            password.value != element['password']) {
            alert('username or password is not correct!');
        }
    }
}