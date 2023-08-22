/* 9. Realizar un programa que pida una frase y el programa deberá mostrar la frase con un
espacio entre cada letra. La frase se mostrara así: H o l a. Nota: recordar el
funcionamiento de la función Substring(). 
 */

var palabra = prompt("Ingrese una palabra");
console.log(palabra);
var espacio = " ";
var palFinal = "";

for (let index = 0; index < palabra.length; index++) {
    var palEspacio = palabra.substring(index,index+1) + espacio;

    palFinal = palFinal + palEspacio;
    }
    console.log(palFinal);