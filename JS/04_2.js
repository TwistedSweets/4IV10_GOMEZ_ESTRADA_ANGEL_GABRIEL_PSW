const ventas = document.getElementById('ventas');
const sueldo_base = document.getElementById('sueldo_base');
const comision = document.getElementById('comision');
const sueldo_total = document.getElementById('sueldo_total');


function formulario(){
    ventas = ventas.value;
    sueldo_base = sueldo_base.value;

    comision = comision.value(ventas*.10);
    sueldo_total = sueldo_total.value(sueldo_base + comision);

    return false;
}

// Second answer
function secondF() {
    let salarioV = document.getElementById("pagoV").value;
    let lector = /\D/;
  
    if (lector.test(salarioV)) {
      alert("Ingresa un salario valido");
      return false;
    } else {
      salarioV = parseFloat(salarioV);
      if (salarioV > 0 && salarioV < 999999) {
        let pagoV = salarioV * 5;
        let extra = 0.1 * pagoV;
        let salarioF = pagoV + extra;
        let impuestos = 0.12 * salarioF;
        let total = salarioF - impuestos;
        alert("Tu cobro mensual es de: $" + total);
      } else {
        alert("Ingresa un salario valido");
        return false;
      }
    }
  }
  
  function secondV() {
    document.getElementById("pagoV").value = "";
  }