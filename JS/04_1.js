const formulario =  document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

var inver = document.getElementById('inversion');
var resul = document.getElementById('resultado');

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        console.log(e.target.value);
    });
});

formulario.addEventListener('submit', (e) => {
    resul.value = parseInt(inver * 0.02);
    console.log(resul.value);
});
