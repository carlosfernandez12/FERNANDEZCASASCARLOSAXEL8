// aqui mete los 10 algoritmos en funciones cada uno 
function Ejericio1() {
    const porcentaje = 2; // porcentaje de la persona 
    var capital = document.getElementById("dinero").value // tomamos el campo de la persona 
    if (capital == "") {
        alert("campo vacio") // por si el usuario ingresa un campo vacio 
    }
    else {
        var verificar = isNaN(capital)
        if (verificar == true) {
            // es cadena 
            alert("ingresa solamente numeros ")
        } else {
            // es numero 
            var capital2 = parseFloat(capital); // transfroamamos el dinerp a int 
            if (capital2 <= 0) {
                alert("Porfacor ingresa un numero mayor a 0 ")
            } else {
                var formula = (capital2 * porcentaje) / 100; // hacemos la formula de la lana 
                capital2 += formula // le sumamos al dinero incial lo que le crecio  
                var final = capital2.toString() // volvemos a transformar a string 
                alert("Su capital sumando el %2 del mes queda en $" + final) // imprimimos un alert con el resultado final 
            }
        }

    }
}
function tarea2() {
    var sueldo = 1000;
    var ventas = document.getElementById("dinero").value;
    var veri = isNaN(ventas);
    if (ventas === "") {
        alert("Campo vacío");
    } else {
        if (veri) {
            alert("Cadena");
        } else {
            var ventasEntero = parseInt(ventas);
            if (ventasEntero !== parseFloat(ventas)) {
                alert("Por favor, ingresa solo números enteros.");
            } else {
                if (ventasEntero <= 0 || ventasEntero >= 10) {
                    alert("Error");
                } else {
                    // ahora sacaremos el porcentaje de una venta 
                    var porcentaje = 10; // Corregido: no se usa "int" en JavaScript
                    var resultado = (sueldo * porcentaje) / 100;
                    resultado = resultado * ventasEntero; // Corregido: utiliza ventasEntero en lugar de ventas
                    sueldo = sueldo + resultado;
                    var final = sueldo.toString(); // Corregido: utiliza toString() en lugar de to toString()
                    alert("El sueldo con las comisiones queda en $" + final); // Corregido: mensaje de alert corregido
                }
            }
        }
    }
}


function tarea3() {
    let producto1 = 100.0
    let producto2 = 200.0
    const descuento = 15
    var elemento = document.getElementById("producto1").value
    var elemento2 = document.getElementById("producto2").value
    var elementoFloat = parseFloat(elemento)
    var elementoFloat2 = parseFloat(elemento2)
    console.log(elementoFloat)
    console.log(elementoFloat2)
    // sumamos las cantidades 
    let compra = producto1 * elementoFloat
    let compra2 = producto2 * elementoFloat2
    let suma = compra + compra2
    if (suma == 0) {
        alert("no hay ninguna cantidad de prenda esojida")
    } else {
        let compra_descuento = (descuento / 100) * suma;
        suma = suma - compra_descuento
        suma2 = String(suma)
        alert("comrpa con descuento %15 queda en $" + suma2)
    }
}
function limitarDecimales(numero, cantidadDecimales) {
    return parseFloat(numero.toFixed(cantidadDecimales));
}
function tarea5() {
    // calcular porcentajes de hombre y mujeres 
    var hombres = document.getElementById("hombres").value
    var mujeres = document.getElementById("mujeres").value
    if (hombres == "" && mujeres == "") {
        alert("ambos campos vacios")
    } else if (hombres == "" && mujeres != "") {
        alert("rellena el campo de hombres")
    } else if (hombres != "" && mujeres == "") {
        alert("rellena el campo de mujeres")
    } else {
        // verificamos que los datos sean numeros 
        var ver1 = isNaN(hombres)
        var ver2 = isNaN(mujeres)
        if (ver1 == true && ver2 == true) {
            alert("ambos campos no son numeros")
        } else if (ver1 == true && ver2 == false) {
            alert("el campo de hombres no es un numero")
        } else if (ver1 == false && ver2 == true) {
            alert("el campo de mujeres no es un numero ")
        } else {
            var ver1 = !Number.isInteger(parseFloat(hombres));
            var ver2 = !Number.isInteger(parseFloat(mujeres));
            if (ver1 && ver2) {
                alert("Ambos campos no son números enteros");
            } else if (ver1 && !ver2) {
                alert("El campo de hombres no es un número entero");
            } else if (!ver1 && ver2) {
                alert("El campo de mujeres no es un número entero");
            } else {
                var numeroH = parseInt(hombres);
                var numeroM = parseInt(mujeres);
                if (numeroH <= 0 && numeroM <= 0) {
                    alert("ambos numeros son cero")
                } else if (numeroH != 0 && numeroM <= 0) {
                    alert("el campo mujeres es cero o menor")
                } else if (numeroH <= 0 && numeroM != 0) {
                    alert("el campo de hombres es menor o igual a cero ")
                } else {
                    // no mames porfin 
                    let total = numeroH + numeroM
                    // ahora sacaremos el porcentaje de cada uno 
                    let porcentajeH = (numeroH / total) * 100
                    let porcentajeM = (numeroM / total) * 100
                    porcentajeH = limitarDecimales(porcentajeH)
                    porcentajeM = limitarDecimales(porcentajeM)
                    let cadenaT = String(total) // total 
                    let cadenaH = String(porcentajeH) // hombres 
                    let cadenaM = String(porcentajeM) // mujeres 
                    alert("Total : " + cadenaT + " # mujeres : %" + cadenaM + " # hombres : %" + cadenaH)
                }
            }

        }
    }

}
function tarea4() {
    var parcial1 = document.getElementById("parcial1").value
    var parcial2 = document.getElementById("parcial2").value
    var parcial3 = document.getElementById("parcial3").value
    var examen = document.getElementById("examen").value
    var trabajo = document.getElementById("trabajo").value
    let acum = 0
    let arreglo = [parcial1, parcial2, parcial3, examen, trabajo]
    let longitud = arreglo.length
    for (let i = 0; i < longitud; i++) {
        if (arreglo[i] == "") {
        } else {
            acum += 1
        }
    }
    if (acum == longitud) {
        // todo esta bien 
        tarea4_1(parcial1, parcial2, parcial3, examen, trabajo)
    } else {
        alert("algun campo esta vacio")
    }
}
function tarea4_1(parcial1, parcial2, parcial3, examen, trabajo) { // verificacion de numeros 
    var arreglo = [parcial1, parcial2, parcial3, examen, trabajo]
    var longitud = arreglo.length
    let acum = 0
    for (let i = 0; i < longitud; i++) {
        var veri = isNaN(arreglo[i])
        if (veri == true) {
            // es una cadena 
        } else {
            acum += 1
        }
    }
    if (acum == longitud) {
        // es que todos los campos son numeros 
        tarea4_2(parcial1, parcial2, parcial3, examen, trabajo)
    } else {
        // es que alguno de lso campos no son numeros 
        alert("alguno de lso campos no es un numero ")
    }
}
function tarea4_2(parcial1, parcial2, parcial3, examen, trabajo) { // trsnaformar todos a numeros y que no sean menores a cero 
    var arreglo = [parcial1, parcial2, parcial3, examen, trabajo]
    let longitud = arreglo.length
    let acum = 0
    for (let i = 0; i < longitud; i++) {
        arreglo[i] = parseFloat(arreglo[i])
    }
    // hasta este punto ya todos son float 
    for (let i = 0; i < longitud; i++) {
        if (arreglo[i] < 0 || arreglo[i] > 10) {
        } else {
            acum += 1
        }
    }
    if (acum == longitud) {
        // todos los numeros son mayores o igual a 0 
        tarea4_3(parcial1, parcial2, parcial3, examen, trabajo)
    } else {
        alert("algun campo contiene un numero mayor a 10 o menor a 0  ")
    }
}
function tarea4_3(parcial1, parcial2, parcial3, examen, trabajo) {
    // todo aqui ahora solo aremos la operaciones 
    /**
     * porcentajes del ejercicio 
     * 55 de los 3 parcioales 
     * 30 de examen 
     * 15 trabajo 
     */
    const porcentajeParciales = 0.55;
    const porcentajeExamen = 0.30;
    const porcentajeTrabajo = 0.15;
    const calificacionFinal = (parcial1 + parcial2 + parcial3) * porcentajeParciales +
        examen * porcentajeExamen +
        trabajo * porcentajeTrabajo;
    var cali = String(calificacionFinal)
    alert("la calificacion final es : " + cali)
}
function tarea6() {
    // año en que nos basaremos es el 2024
    var año = document.getElementById("edad").value
    var año = parseInt(año)
    var formula = 2024 - año
    var resultado = String(formula)
    alert("tu edad es de : " + resultado)
}
function validacion_vacios() {
    let longitud = arguments.length
    let acum = 0
    let acum2 = 0
    let bandera = false
    for (let i = 0; i < longitud; i++) {
        if (arguments[i] == "") {
        } else {
            acum += 1
        }
    }
    if (acum == longitud) {
        // segunda validadcion que sean numeros 
        for (let i = 0; i < longitud; i++) {
            var ver = isNaN(arguments[i])
            if (ver == true) {
            } else {
                acum2 += 1
            }
        }
        if (acum2 == longitud) {
            bandera = true
            return bandera
        } else {
            alert("algun campo hay un caracter invalido ")
        }
    } else {
        alert("algun campo est vacio")
    }
}
function tarea7() {
    // tareaa numero 7
    var numero = document.getElementById("numero").value
    var numero2 = document.getElementById("numero2").value
    var respuesta = validacion_vacios(numero, numero2)
    if (respuesta == true) {
        // aqui ya empieza la logica 
        var numeroI = parseFloat(numero)
        var numeroI2 = parseFloat(numero2)
        if (numeroI == numeroI2) {
            var resultado = numeroI * numeroI2
            var cadena = String(resultado)
            alert("el resultado es de : " + cadena)
        } else if (numeroI > numeroI2) {
            var resultado = numeroI - numeroI2
            var cadena = String(resultado)
            alert("la respuesta es de : " + cadena)
        } else {
            var resultado = numeroI + numeroI2
            var cadena = String(resultado)
            alert("la respuesta es de : " + cadena)
        }
    }
}
function tarea8() {
    var numero = document.getElementById("numero").value
    var numero2 = document.getElementById("numero2").value
    var numero3 = document.getElementById("numero3").value
    var bandera = validacion_vacios(numero, numero2, numero3)
    if (bandera == true) {
        //aqui vamos a hacer la opcaciones 
        tarea8_1(numero, numero2, numero3)
    }
}
function tarea8_1(num1, num2, num3) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);
    let maxNumero = num1;
    if (num2 > maxNumero) {
        maxNumero = num2;
    }
    if (num3 > maxNumero) {
        maxNumero = num3;
    }
    alert("El número más grande es " + maxNumero);
}

function tarea9() {
    var horasNormales = parseFloat(document.getElementById("horasNormales").value);
    var salarioHoraNormal = parseFloat(document.getElementById("salarioHoraNormal").value);
    var bandera = validacion_vacios(horasNormales, salarioHoraNormal)
    if (bandera == true) {
        if (horasNormales < 0 && salarioHoraNormal < 0) {
            alert("algun campo es menor a cero revisalo")
        } else {
            if (horasNormales > 40) {
                var horasExtras = horasNormales - 40;
                var salarioHorasExtras = 0;
                if (horasExtras <= 8) {
                    salarioHorasExtras = horasExtras * salarioHoraNormal * 2;
                } else {
                    salarioHorasExtras = (8 * salarioHoraNormal * 2) + ((horasExtras - 8) * salarioHoraNormal * 3);
                }
                var salarioTotal = (40 * salarioHoraNormal) + salarioHorasExtras;
                alert("Salario total: $" + salarioTotal.toFixed(2));
            } else {
                var salarioTotalNormal = horasNormales * salarioHoraNormal;
                alert("Salario total: $" + salarioTotalNormal.toFixed(2));
            }
        }
    } else {
        alert("Error")
    }
}

function tarea10() {
    var antiguedad = parseInt(document.getElementById("antiguedad").value);
    var salarioMensual = parseFloat(document.getElementById("salarioMensual").value);

    var bandera = validacion_vacios(antiguedad, salarioMensual)
    if (bandera == true) {
        if (antiguedad < 0 || salarioMensual < 0) {
            alert("campos mal ")
        } else if (antiguedad < 0 && salarioMensual < 0) {
            alert("campos mal ")
        } else {

            var utilidad = 0;

            if (antiguedad < 1) {
                utilidad = salarioMensual * 0.05;
            } else if (antiguedad >= 1 && antiguedad < 2) {
                utilidad = salarioMensual * 0.07;
            } else if (antiguedad >= 2 && antiguedad < 5) {
                utilidad = salarioMensual * 0.10;
            } else if (antiguedad >= 5 && antiguedad < 10) {
                utilidad = salarioMensual * 0.15;
            } else {
                utilidad = salarioMensual * 0.20;
            }

            alert("La utilidad anual es: $" + utilidad.toFixed(2));
        }
    }


}