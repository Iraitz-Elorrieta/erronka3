const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const username = document.getElementById('user-username');
const email = document.getElementById('user-email');
const password = document.getElementById('user-password');
const confirmPassword = document.getElementById('confirm-password');
const button = document.getElementById('button');

button.onclick = function (e) {
    e.preventDefault();

    const data = {
        firstName: firstName.value,
        lastName: lastName.value,
        username: username.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value
    };

    console.log(data);

     window.location.href = 'C:/Users/in1dm3-d/Desktop/erronka3/logina/index.html';
};
