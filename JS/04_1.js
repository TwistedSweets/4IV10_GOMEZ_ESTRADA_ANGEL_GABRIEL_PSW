const formulario =  document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        console.log(e.target.value);
    });
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('No se envió el formulario');
});