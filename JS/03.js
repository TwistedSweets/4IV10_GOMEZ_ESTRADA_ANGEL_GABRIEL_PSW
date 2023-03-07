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

    var user = localStorage.getItem('user');
    var data = JSON.parse(user);

    if(data.user == username && data.password == password){
        alert("Bienvenido " + data.name);
    }
    else{
        alert("Usuario o contraseña incorrectos");
    }
});