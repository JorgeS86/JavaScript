/*6. Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar.
En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar”. */


var numero = parseInt(prompt("Ingrese un numero"));

if (numero == 0) {
    alert("EL numero no es par ni impar");
} else if (numero % 2 == 0) {
    alert("EL numero es par");
} else {
    alert("El numero es impar");
}
/*
let numero = prompt("Ingresa un número:");

if (!isNaN(numero)) {
  let number = parseInt(numero);
  
  if (number === 0) {
    console.log("El número ingresado es cero.");
  } else if (number % 2 === 0) {
    console.log("El número ingresado es par.");
  } else {
    console.log("El número ingresado es impar.");
  }
} else {
  console.log("El valor ingresado no es un número.");
}*/
