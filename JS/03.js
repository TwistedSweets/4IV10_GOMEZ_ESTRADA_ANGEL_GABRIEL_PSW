const x = document.getElementById("inputpassword");
const y = document.getElementById("inputuser");

function showps(){
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function register(){
    if(x.value == "" | y.value == ""){
        alert("Almenos intenta llenar los campos");
    }
    else{
        alert("Registro exitoso :D");
    }
    return false;
}