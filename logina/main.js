const erabiltzailea = document.getElementById('erabiltzailea');
const password = document.getElementById('password');
const button = document.getElementById('button');

button.onclick = function (e) {
    e.preventDefault();

    const data = {
        username: erabiltzailea.value,
        password: password.value
    };

    console.log(data);

     window.location.href = 'https://www.instagram.com';
};
