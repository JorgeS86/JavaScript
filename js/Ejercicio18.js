/*18. A partir del siguiente array: var valores = [true, 5, false, "hola", "adios", 2]:
a) Determinar cual de los dos elementos de texto es mayor
b) Utilizando exclusivamente los dos valores booleanos del array, determinar los
operadores necesarios para obtener un resultado true y otro resultado false
c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los
dos elementos numéricos*/

var valores = [true, 5, false, "hola", "adios", 2];
let palLarga = "";

function opcA() {
    for (let index = 0; index < valores.length; index++) {
        if (typeof valores[index] == "string") {
            if (valores[index].length > palLarga.length) {
                palLarga = valores[index];
            }
        }
        console.log(palLarga);
    }
}

function opcB() {
    var resultadoTrue = valores[0] || valores[2]; // true || false
    var resultadoFalse = valores[0] && valores[2]; // true && false

    console.log("Resultado True:", resultadoTrue);
    console.log("Resultado False:", resultadoFalse);
}

function opcC() {
    var num1 = valores[1];
    var num2 = valores[5];

    var suma = num1 + num2;
    var resta = num1 - num2;
    var multiplicacion = num1 * num2;
    var division = num1 / num2;
    var modulo = num1 % num2;

    console.log("Suma:", suma);
    console.log("Resta:", resta);
    console.log("Multiplicación:", multiplicacion);
    console.log("División:", division);
    console.log("Módulo:", modulo);
}