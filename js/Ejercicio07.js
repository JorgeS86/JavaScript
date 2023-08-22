/*7. Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación
solicite números al usuario hasta que la suma de los números introducidos supere el
límite inicial.*/

do {

var inicial = parseInt(prompt("Ingrese un nro inicial"));
console.log(inicial);

var suma = 0;

if (inicial >= 0) {
   do {

    suma += parseInt(prompt("Ingrese un número"))
    console.log(suma);

   } while (inicial > suma);

   alert("Usted ha superado el valor inicial")
   console.log(suma);
}else{
    alert('Por favor, ingrese un número positivo en el límite numérico.');  
}

} while (inicial < 0);
