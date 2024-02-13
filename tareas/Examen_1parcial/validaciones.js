document.addEventListener('DOMContentLoaded', function () {
    var boton = document.getElementById("boton");
    boton.onclick = function () {
        validacion_capital();
    }
});


function validacion_capital() {
    var capital = document.getElementById("capital").value;
    var mensaje = document.getElementById("mensaje");
    mensaje.innerHTML = "";

    if (capital === "") {
        mensaje.innerHTML = "Campo vacío";
    } else {
        let verificar = isNaN(capital);
        if (verificar === true) {
            mensaje.innerHTML = "Campo no válido";
        } else {
            let capital2 = Number.parseFloat(capital);
            if (!Number.isFinite(capital2)) {
                mensaje.innerHTML = "El valor introducido no es un número decimal.";
                return;
            }
            capital2 = capital2.toFixed(2);
            if (capital2 <= 0) {
                mensaje.innerHTML = "El número debe ser mayor a 0.";
            } else if (capital2 > 10000) {
                mensaje.innerHTML = "El número debe ser menor o igual a 10000.";
            } else {
                
                var porcentaje = parseFloat(document.getElementById("porcentaje").value) / 100;
                var dias = parseFloat(document.getElementById("dias").value);

                if (!isNaN(porcentaje) && !isNaN(dias)) {
                    
                    var resultado = (capital2 * (porcentaje / dias)).toFixed(2);
                    alert("El resultado del cálculo es: $" + resultado);

                    
                    generarTablaResultados(dias, capital2, porcentaje);
                }
            }
        }
    }
}

function generarTablaResultados(dias, capital, porcentaje) {
    var tablaResultados = document.getElementById("tablaResultados");
    tablaResultados.innerHTML = ""; 

    for (let i = 1; i <= dias; i++) {
        var resultado = (capital * porcentaje / 365 * i).toFixed(2);


        var fila = document.createElement("tr");
        fila.innerHTML = "<td>Día " + i + "</td><td>$" + resultado + "</td>";

        
        tablaResultados.insertBefore(fila, tablaResultados.firstChild);
    }
}
