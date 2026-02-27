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

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user: username, password: password })
    })
    .then(res => res.json())
    .then(data => {
        alert(data.message);
    })
    .catch(err => alert('Error: ' + err));
});