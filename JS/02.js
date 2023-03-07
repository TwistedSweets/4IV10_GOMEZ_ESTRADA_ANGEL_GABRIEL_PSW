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

function register(){
    if(x.value != y.value){
        alert("Contraseñas no coinciden");
        y.value = "";
    }
    else{
        alert("Registro exitoso :D");
    }

    return false;
}