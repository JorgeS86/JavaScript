/*8. Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el
programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de
todos ellos.*/

var max = Number.MIN_VALUE;
var min = Number.MAX_VALUE;
var suma = 0;
var contador = 0;

//console.log(max);
//console.log(min);
//console.log(prom);

do {
    
    var numero = parseInt(prompt("Ingrese un nro"));
    console.log("num",numero);

    if (numero != 0) {
        max = Math.max(max,numero);
        min = Math.min(min,numero);
        contador ++;
        suma += numero;
    }
 
} while (numero != 0);

    prom = suma / contador;
    console.log("suma",suma);
    console.log("contador",contador);
    console.log("promedio",prom);
    console.log("min",min);
    console.log("max",max);

