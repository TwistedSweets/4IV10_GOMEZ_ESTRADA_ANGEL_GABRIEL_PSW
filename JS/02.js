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

        fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            alert(data.message);
        })
        .catch(err => alert('Error: ' + err));
    }
});