// Sixth answer
function sixth() {
  let ingresoNacimiento = document.getElementById("fecha").value;
  let nacimientoIngresado = new Date(ingresoNacimiento);
  let fechaActual = new Date();
  let mesActual = fechaActual.getMonth();
  let añoActual = fechaActual.getFullYear();
  let edadAño;
  let edadMes;

  if (!!nacimientoIngresado.valueOf()) {
    año = parseInt(nacimientoIngresado.getFullYear());
    mes = parseInt(nacimientoIngresado.getMonth());
    dia = parseInt(nacimientoIngresado.getDate());
  }

  if (año > añoActual || año < "1940") {
    alert("No se puede ingresar ese año ");
    return false;
  } else {
    edadAño = añoActual - año;
    edadMes = mesActual - mes;

    if (edadMes < 0) {
      edadAño--;
    }

    alert("Tu edad es de: " + edadAño + " años");
  }
}

// Seventh answer
function seventh() {
  let numeroUno = document.getElementById("numeroUno").value;
  let numeroDos = document.getElementById("numeroDos").value;
  let resultado;
  let lector = /\D/;

  if (lector.test(numeroUno) || lector.test(numeroDos)) {
    alert("Ingresa datos validos");
    return false;
  } else {
    numeroUno = parseFloat(numeroUno);
    numeroDos = parseFloat(numeroDos);
    if (numeroUno < 1000 || numeroDos < 1000) {
      if (numeroUno > numeroDos) {
        resultado = Math.pow(numeroUno, numeroDos);
        alert(
          "El numero mayor es: " +
            numeroUno +
            " entonces el resultado de la operacion es: " +
            resultado
        );
      } else if (numeroDos > numeroUno) {
        resultado = numeroDos / numeroUno;
        alert(
          "El numero mayor es: " +
            numeroDos +
            " entonces el resultado de la operacion es: " +
            resultado
        );
      } else if (numeroDos == numeroUno) {
        resultado = numeroUno * numeroDos;
        alert(
          "Los numeros son iguales entonces el resultado de la operacion es: " +
            resultado
        );
      }
    } else {
      alert("Ingresa numeros menores a 1000");
      return false;
    }
  }
}

function seventhI(e) {
  let teclado = document.all ? e.keyCode : e.which;
  if (teclado == 8) return true;
  let patron = /[0-9\d .]/;
  let codigo = String.fromCharCode(teclado);
  return patron.test(codigo);
}

function seventhV() {
  document.getElementById("numeroUno").value = "";
  document.getElementById("numeroDos").value = "";
}

// Eighth answer
function eighth() {
  let numberOne = document.getElementById("numberOne").value;
  let numberTwo = document.getElementById("numberTwo").value;
  let numberThree = document.getElementById("numberThree").value;
  let mayor;
  let lector = /\D/;

  if (
    lector.test(numberOne) ||
    lector.test(numberTwo) ||
    lector.test(numberThree)
  ) {
    alert("Ingresa datos validos");
    return false;
  } else {
    mayor = Math.max(numberOne, numberTwo, numberThree);
    alert("El numero mayor es: " + mayor);
  }
}

// Ninth answer
function ninth() {
  let salario = document.getElementById("payment").value;
  let horasTrabajadas = document.getElementById("hours").value;
  let horasSobrantes;
  let horasDoble;
  let horasTriple;
  let pago;
  let pagoExtra;
  let pagoDoble;
  let pagoTriple;
  let pagoTotal;
  let lector = /\D/;

  if (
    lector.test(salario) ||
    lector.test(horasTrabajadas) ||
    salario == 0 ||
    horasTrabajadas == 0
  ) {
    alert("Ingresa datos validos");
    return false;
  } else {
    if (horasTrabajadas > 40) {
      pagoExtra = true;
    } else {
      pagoExtra = false;
    }

    if (
      salario > 0 &&
      salario < 999999 &&
      horasTrabajadas > 0 &&
      horasTrabajadas < 100000
    ) {
      if (pagoExtra == true) {
        horasSobrantes = horasTrabajadas - 40;
        if (horasSobrantes > 8) {
          horasTriple = horasSobrantes - 8;
          horasDoble = horasSobrantes - horasTriple;
          pagoDoble = horasDoble * (salario * 2);
          pagoTriple = horasTriple * (salario * 3);
          pago = 40 * salario;
          pagoTotal = pago + pagoDoble + pagoTriple;
        } else {
          horasDoble = horasSobrantes;
          pagoDoble = horasDoble * (salario * 2);
          pago = 40 * salario;
          pagoTotal = pago + pagoDoble;
        }
      } else {
        pagoTotal = horasTrabajadas * salario;
      }
      alert("Tu pago de todo es: $" + pagoTotal);
    } else {
      alert("Ingresa datos validos");
      return false;
    }
  }
}

// Tenth answer
function tenth() {
  let salario = parseInt(document.getElementById("lastment").value);
  let antiguedad = parseInt(document.getElementById("years").value);
  let utilidad;
  let pago;
  let lector = /\D/;

  if (lector.test(salario) || lector.test(antiguedad)) {
    alert("Ingresa datos validos");
    return false;
  } else {
    if (antiguedad > 0 && antiguedad < 70) {
      if (salario > 0 && salario < 999999) {
        if (antiguedad < 1) {
          utilidad = 0.05;
        } else if (antiguedad >= 1 && antiguedad <= 2) {
          utilidad = 0.07;
        } else if (antiguedad >= 2 && antiguedad <= 5) {
          utilidad = 0.1;
        } else if (antiguedad >= 5 && antiguedad <= 10) {
          utilidad = 0.15;
        } else if (antiguedad > 10) {
          utilidad = 0.2;
        }
        pago = salario * utilidad;
        alert("Tu utilidad es: $" + pago);
      } else {
        alert("Ingresa un salario valido");
        return false;
      }
    } else {
      alert("Ingresa unos años validos");
      return false;
    }
  }
}

function tenthI(e) {
  let teclado = document.all ? e.keyCode : e.which;
  if (teclado == 8) return true;
  let patron = /[0-9\d .]/;
  let codigo = String.fromCharCode(teclado);
  return patron.test(codigo);
}

function tenthV() {
  document.getElementById("lastment").value = "";
  document.getElementById("years").value = "";
}
