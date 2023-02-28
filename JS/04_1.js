/*const formulario =  document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const alfa = Array.from(Array(26)).map((e, i) => i + 65);
const alfabeto = alfa.map((x) => String.fromCharCode(x));
console.log(alfabeto), si sirve*/

function formulario(){
    inversion = document.getElementById('inversion').value;
    final = inversion * 0.02;
    resultado = document.getElementById('resultado').value = final;

    return false;
}
