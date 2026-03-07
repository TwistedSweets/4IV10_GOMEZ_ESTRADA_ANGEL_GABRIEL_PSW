//Si el usuario ya esta logueado, redirigir a profile
if (localStorage.getItem('token')) {
    window.location.href = './Profile.html';
}

const API_URL = 'http://localhost:3006';
const formulario = document.getElementById('formulario');
const x = document.getElementById("inputpassword");
const y = document.getElementById("inputuser");

function showps(){
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    var username = document.getElementById('inputuser').value;
    var password = x.value;

    fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user: username, password: password })
    })
    .then(res => res.json())
    .then(data => {

        console.log('Login response:', data);
        //guardar token y usuario en localStorage
        if (data.token) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', data.user);
            window.location.href = './Profile.html';
        } else {
            alert(data.message);
        }
    })
    .catch(err => alert('Error: ' + err));
});