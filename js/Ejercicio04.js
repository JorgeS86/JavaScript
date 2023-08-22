/* 4. Realiza un programa que sólo permita introducir los caracteres ‘S’ y ‘N’. Si el usuario
ingresa alguno de esos dos caracteres se deberá de imprimir un mensaje por pantalla
que diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”. */

var pregunta = prompt("Ingrese una letra");

while (pregunta !== "S" && pregunta !== "N") {
         console.log("INCORRECTO");
         pregunta = prompt("Ingrese una letra");
  }
console.log("CORRECTO");
