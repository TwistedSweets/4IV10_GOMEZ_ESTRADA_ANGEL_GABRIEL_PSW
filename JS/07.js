const formulario = document.getElementById('formulario');
var tableref = document.getElementById('table');

/*function incrementarvalue (value)
{
    value = isNaN(value) ? 0 : value;
    value+= 1;
}*/

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    var montoni = document.getElementById('montoni').value;
    if(montoni > 100000){
        alert("Numero muy alto, intenta con uno más pequeño");
    }
    else{
        var inter_comp = montoni * 1.331;
        var interes = montoni * 0.3;
        var cuota = interes + montoni;
        var monto = montoni / 12;
        var restante = montoni - monto;
    }

    document.getElementById('compuesto').value = inter_comp;

    var tablaref = document.getElementById('table');

    var newrow = tablaref.insertRow(tableref.rows.length);

    var newcell_1 = newrow.insertCell(0);

    newcell_1.innerHTML = restante.toFixed(2);

    var newcell_2 = newrow.insertCell(1);
    newcell_2.innerHTML = monto.toFixed(2);

    var newcell_2 = newrow.insertCell(2);
    newcell_2.innerHTML = cuota;

    var newcell_2 = newrow.insertCell(3);
    newcell_2.innerHTML = interes.toFixed(2);

    var newcell_2 = newrow.insertCell(4);
    f = montoni - cuota;
    newcell_2.innerHTML = f.toFixed(2);

});

function no_punto(event) { 
    var e = event || window.event;
    var key = e.keyCode || e.which;

    if ( key === 110 || key === 190 || key === 188 ) {     
        e.preventDefault();     
    }
}

/*
Datos:
prestamo: por parte del usuario, en este ejemplo 15000
30% interes anual y 3 años, frecuencia es de 1 y el periodo(anual) es 3*1 = 3
la cuota nivelada es la tasa, nperiodos y el capital inicial. Osea:
30%/1, 3, 15000 = 825.94
el interes es el interes anual * con el prestamo y dividido entre la frec
0.3 * 15000 / 1 = 4500
y la capital es la cuota menos el interes. 
825.94 - 4500 = -3674.06
y esto da el saldo osea, saldo - capital = saldo.
15000 - (-3674.06) = 18674.06
eso es todo sobre la tabla de amortizacion.
ahora bien el interes compuesto es:
x = C (1+t/n)nu - C

x = interés compuesto

C = capital (el monto del depósito inicial o del préstamo)

t = tasa de interés anual

n = número de periodos de capitalización por unidad de tiempo

u = número de unidades de tiempo en que el dinero se invierte o se solicita en préstamo

15000 * (1 + 0.3/3)^3 = 19965
*/

/*Si queremos modificar html podemos incrustar*/