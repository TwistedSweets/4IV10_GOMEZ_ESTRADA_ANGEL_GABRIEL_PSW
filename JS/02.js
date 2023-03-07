const formulario = document.getElementById('formulario');
const x = document.getElementById("inputpassword");
const y = document.getElementById("repeatpassword");

function showps(){
    if (x.type === "password") {
        x.type = "text";
        y.type = "text";
    } else {
        x.type = "password";
        y.type = "password";
    }
}

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    if(x.value != y.value){
        alert("Contraseñas no coinciden");
        y.value = "";
    }
    else{
        var user = {
            name: document.getElementById('inputname').value,
            apellpat: document.getElementById('inputfather').value,
            apellmat: document.getElementById('inputmother').value,
            user: document.getElementById('inputuser').value,
            password: x.value,
        };

        var JSONuser = JSON.stringify(user);    
        localStorage.setItem('user', JSONuser);

        alert("Usuario registrado");
    }
});