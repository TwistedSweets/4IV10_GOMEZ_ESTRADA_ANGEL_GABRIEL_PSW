const ventas = document.getElementById('ventas');
const sueldo_base = document.getElementById('sueldo_base');
const comision = document.getElementById('comision');
const sueldo_total = document.getElementById('sueldo_total');


function formulario(){
    for(let i = 0; i < ventas.value; i++){
        ventas = ventas.value;
    }
    sueldo_base = sueldo_base.value;

    comision = comision.value(ventas*.10);
    sueldo_total = sueldo_total.value(sueldo_base + comision);

    return false;
}