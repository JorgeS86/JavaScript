/*11. Escribir una función que reciba un String y devuelva la palabra más larga.
String Ejemplo: “Guia de JavaScript”
Resultado esperado : “JavaScript”*/

function palabraLarga(){
   
let frase = prompt("Ingrese una palabra");

let palabras = frase.split(' ');

let palabraLarga = '';

for (let index = 0; index < palabras.length; index++) {
    if (palabras[index].length > palabraLarga.length) {
        palabraLarga = palabras[index];
    }
}
console.log(palabras);
console.log(palabraLarga);
}

