/*const formulario =  document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const alfa = Array.from(Array(26)).map((e, i) => i + 65);
const alfabeto = alfa.map((x) => String.fromCharCode(x));
console.log(alfabeto), si sirve*/

function formulario(){
    inversion = document.getElementById('inversion').value;
    if(inversion > 10000){
        console.log("fuck u, es muy alto")
        document.getElementById('inversion').value = 0;
        final = 0;
        resultado = document.getElementById('resultado').value = 0;
        alert("FUCK U LO PUSISTE MAL");
    }
    else{
        final = inversion * 0.02;
        resultado = document.getElementById('resultado').value = final;
    }  

    return false;
}
