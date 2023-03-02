const formulario = document.getElementById('formulario');
let tableref = document.getElementById('table');

function calcular(e){
    e.preventDefault();
    var monto_inicial = document.getElementById('monto_inicial').value;
    if (monto_inicial > 100000){
        alert("Numero muy alto, intenta con uno mas pequeño");
    }
    else{
        var inter_comp = monto_inicial * 1.331; /* = ((1 + (0.3 / 3))^3), lo puse haci como numero porque de todos modos no cambiara ni el año ni el interes
                                                ademas de que sacaba mal el resultado de esa operacion por alguna forma que desconozco xdxd :v*/
        var interes = inter_comp * 0.3;
        console.log(interes);
    }

    console.log(inter_comp.toFixed(2));

    let transactionformdata = new FormData(formulario);
    insertrowintable(transactionformdata);

    return false;
}

formulario.addEventListener('submit', calcular(e), e == false);

function insertrowintable(transactionformdata){
    let tableref = document.getElementById('table');

    let newrow = tableref.insertRow(tableref.rows.length);

    let newcell = newrow.insertCell(0);
    var number = 1;
    newcell.textcontent = transactionformdata.get('monto_inicial');
    if (typeof insertrowintable == 'function'){
        number++;
    }
    else{
        alert("WTF, COMO HICISTE ESO")
    }
}

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