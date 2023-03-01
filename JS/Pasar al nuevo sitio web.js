// First answer
function funcionUno() {
  //Varaibles
  let capitalIngresado = document.getElementById("inversion").value;
  let tiempoIngresado = document.getElementById("meses").value;
  let ganancia;
  let totalCambiante;
  let totalFinal;

  //Proceso
  let lector = /\D/;

  if (lector.test(capitalIngresado) || lector.test(tiempoIngresado)) {
    alert("Ingresa datos validos");
    return false;
  } else {
    capitalIngresado = parseFloat(capitalIngresado);
    tiempoIngresado = parseFloat(tiempoIngresado);
    if (tiempoIngresado > 0 && tiempoIngresado <= 36) {
      if (capitalIngresado > 0 && capitalIngresado <= 999999) {
        for (let i = 0; i < tiempoIngresado; i++) {
          ganancia = capitalIngresado * 0.08;
          totalCambiante = capitalIngresado + ganancia;
          capitalIngresado = totalCambiante;
        }
        totalFinal = totalCambiante;
        alert(
          "Tu inversion en " +
            tiempoIngresado +
            " meses genera: $" +
            totalFinal.toFixed(2)
        );
      } else {
        alert("Ingresa una cantidad de capital valida");
        return false;
      }
    } else {
      alert("Los meses ingresados son invalidos");
      return false;
    }
  }
}

function vaciar() {
  document.getElementById("inversion").value = "";
  document.getElementById("meses").value = "";
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

// Third answer
function thirdF() {
  //Variables
  let productoIngresado = document.getElementById("producto").value;
  let marcaIngresada = document.getElementById("marca").value;
  let tipoIngresado = document.getElementById("tipoProducto").value;
  let precioIngresado = document.getElementById("precioProducto").value;
  let lector = /\D\./;
  let lector2 = /\d/;

  if (
    lector.test(precioIngresado) ||
    lector2.test(
      productoIngresado ||
        lector2.test(marcaIngresada) ||
        lector2.test(tipoIngresado)
    )
  ) {
    alert("Ingresa datos validos");
    return false;
  } else {
    //Cambiando tipo de dato
    productoIngresado = String(productoIngresado);
    marcaIngresada = String(marcaIngresada);
    tipoIngresado = String(tipoIngresado);
    precioIngresado = parseFloat(precioIngresado);
    //Proceso
    if (precioIngresado > 0 && precioIngresado < 999999) {
      if (
        productoIngresado != "" &&
        marcaIngresada != "" &&
        tipoIngresado != ""
      ) {
        if (
          productoIngresado.length < 100 &&
          marcaIngresada.length < 100 &&
          tipoIngresado.length < 100
        ) {
          //Varibles finales
          let precioFinal;
          let descuento;
          //Dato ingresado a minusculas
          tipoIngresado = tipoIngresado.toLowerCase();
          //Calculos de cada caso
          switch (tipoIngresado) {
            case "papa":
              descuento = precioIngresado * 0.02;
              precioFinal = precioIngresado - descuento;
              alert(
                'Tu producto "' +
                  productoIngresado +
                  '" de la marca "' +
                  marcaIngresada +
                  '" tiene un descuento del 2% y su precio final es de: $' +
                  precioFinal.toFixed(2)
              );
              break;
            case "pastelito":
              descuento = precioIngresado * 0.1;
              precioFinal = precioIngresado - descuento;
              alert(
                'Tu producto "' +
                  productoIngresado +
                  '" de la marca "' +
                  marcaIngresada +
                  '" tiene un descuento del 10% y su precio final es de: $' +
                  precioFinal.toFixed(2)
              );
              break;
            case "lacteo":
              descuento = precioIngresado * 0.075;
              precioFinal = precioIngresado - descuento;
              alert(
                "Tu producto " +
                  productoIngresado +
                  " de la marca " +
                  marcaIngresada +
                  " tiene un descuento del 7.5% y su precio final es de: $" +
                  precioFinal.toFixed(2)
              );
              break;
            default:
              precioFinal = precioIngresado;
              alert(
                "Tu producto " +
                  productoIngresado +
                  " de la marca " +
                  marcaIngresada +
                  " no tiene descuento por lo tanto su precio es: $" +
                  precioFinal
              );
              break;
          }
        } else {
          alert("Ingresa en los campos informacion valida");
          return false;
        }
      } else {
        alert("Llena los campos");
        return false;
      }
    } else {
      alert("Ingresa un precio valido");
      return false;
    }
  }
}

function thirdV() {
  document.getElementById("producto").value = "";
  document.getElementById("marca").value = "";
  document.getElementById("tipoProducto").value = "";
  document.getElementById("precioProducto").value = "";
}

// Fourth answer
function fourthF() {
  //Variables
  let parcial1 = document.getElementById("parcial1").value;
  let parcial2 = document.getElementById("parcial2").value;
  let parcial3 = document.getElementById("parcial3").value;
  let examenFinal = document.getElementById("examenFinal").value;
  let trabajoFinal = document.getElementById("trabajoFinal").value;

  //Lector
  let lector = /\D\./;

  //Validacion extra
  if (
    lector.test(parcial1) ||
    lector.test(parcial2) ||
    lector.test(parcial3) ||
    lector.test(examenFinal) ||
    lector.test(trabajoFinal)
  ) {
    alert("Ingresa datos validos");
    return false;
  } else {
    //Parseo de datos
    parcial1 = parseFloat(parcial1);
    parcial2 = parseFloat(parcial2);
    parcial3 = parseFloat(parcial3);
    examenFinal = parseFloat(examenFinal);
    trabajoFinal = parseFloat(trabajoFinal);

    //Proceso
    if (
      parcial1 >= 0 &&
      parcial2 >= 0 &&
      parcial3 >= 0 &&
      examenFinal >= 0 &&
      trabajoFinal >= 0
    ) {
      if (
        parcial1 <= 10 &&
        parcial2 <= 10 &&
        parcial3 <= 10 &&
        examenFinal <= 10 &&
        trabajoFinal <= 10
      ) {
        //Variables Finales
        let promedioParciales;
        let porcentajeParciales;
        let porcentajeExamenFinal;
        let porcentajeTrabajoFinal;
        let calificacionFinal;

        //Calculos
        promedioParciales = (parcial1 + parcial2 + parcial3) / 3;
        alert(
          "Tu promedio de los parciales es: " + promedioParciales.toFixed(2)
        );
        porcentajeParciales = promedioParciales * 0.55;
        porcentajeExamenFinal = examenFinal * 0.3;
        porcentajeTrabajoFinal = trabajoFinal * 0.15;
        calificacionFinal =
          porcentajeParciales + porcentajeExamenFinal + porcentajeTrabajoFinal;
        alert("Tu calificacion final es: " + calificacionFinal.toFixed(2));
      } else {
        alert("Ingresa calificaciones validas");
        return false;
      }
    } else {
      alert("Ingresa una calificacion valida ");
      return false;
    }
  }
}

function fourthV() {
  document.getElementById("parcial1").value = "";
  document.getElementById("parcial2").value = "";
  document.getElementById("parcial3").value = "";
  document.getElementById("examenFinal").value = "";
  document.getElementById("trabajoFinal").value = "";
}

// Fifth answer
function fifthF() {
  //Variables
  let hombres = document.getElementById("hombres").value;
  let mujeres = document.getElementById("mujeres").value;

  //Lector
  let lector = /\D/;

  //Validacion extra
  if (lector.test(hombres) || lector.test(mujeres)) {
    alert("Ingresa datos validos");
    return false;
  } else {
    //Parseo de datos
    hombres = parseInt(hombres);
    mujeres = parseInt(mujeres);

    //Proceso
    if (hombres >= 0 && mujeres >= 0) {
      if (hombres <= 100 && mujeres <= 100) {
        //Variables Finales
        let porcentajeHombres;
        let porcentajeMujeres;
        let totalPersonas;

        //Calculos
        totalPersonas = hombres + mujeres;
        porcentajeHombres = (hombres / totalPersonas) * 100;
        porcentajeMujeres = (mujeres / totalPersonas) * 100;
        alert(
          "El 100% de personas en el grupo es: " +
            totalPersonas +
            ", el porcentaje de hombres es: " +
            porcentajeHombres.toFixed(0) +
            "% y el porcentaje de mujeres es: " +
            porcentajeMujeres.toFixed(0) +
            "%"
        );
      } else {
        alert("Ingresa datos validos");
        return false;
      }
    } else {
      alert("Ingresa datos validos");
      return false;
    }
  }
}

function fifthV() {
  document.getElementById("hombres").value = "";
  document.getElementById("mujeres").value = "";
}

//Validaciones de teclado

function inputNumeros(e) {
  let teclado = document.all ? e.keyCode : e.which;
  if (teclado == 8) return true;
  let patron = /[0-9\d .]/;
  let codigo = String.fromCharCode(teclado);
  return patron.test(codigo);
}

function inputLetras() {
  var charCode = event.keyCode;

  if (
    (charCode > 64 && charCode < 91) ||
    (charCode > 96 && charCode < 123) ||
    charCode == 8
  )
    return true;
  else return false;
}
