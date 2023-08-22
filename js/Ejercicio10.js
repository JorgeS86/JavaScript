/*Escribir una función flecha que reciba una palabra y la devuelva al revés.

var palabra = prompt("Ingrese una palabra");
var final = "";
for (let index = palabra.length; index >= 0; index--) {
    var letra = palabra.substring(index, index-1);
    console.log(letra);

    final = final + letra;
}
console.log(final);*/

function reves(){

var palabra = prompt("Ingrese una palabra");
final=[palabra.length];
finalReves=[palabra.length];

for (let index = 0; index < palabra.length; index++) {
    final[index]=palabra.substring(index,index+1); 
}

console.log(final);
finalReves = final.reverse();
console.log(finalReves);
}
