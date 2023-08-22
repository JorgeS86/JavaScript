/* 5. Construir un programa que simule un menú de opciones para realizar las cuatro
operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores
numéricos enteros. El usuario, además, debe especificar la operación con el primer
carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’
o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división. */

var num1 = prompt("Ingrese el primer numero");
var num2 = prompt("Ingrese el segundo numero");
var opcion = prompt("Ingrese la operacion que desea realizar S/M/D/R");

switch (opcion) {
    case "s":
        alert(`El resultado de la suma de ${num1} + ${num2} es: ${parseInt(num1) + parseInt(num2)}`);
        break;
    case "m":
        alert(`El resultado de la multiplicacion de ${num1} + ${num2} es: ${parseInt(num1) * parseInt(num2)}`);
        break;
    case "d":
        alert(`El resultado de la division de ${num1} + ${num2} es: ${parseInt(num1) / parseInt(num2)}`);
        break;
    case "r":
        alert(`El resultado de la resta de ${num1} + ${num2} es: ${parseInt(num1) - parseInt(num2)}`);
        break

    default:
        alert("No ingreso ninguna opcion correcta")
        break;
}