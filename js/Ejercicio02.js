/* 2. Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio
de una circunferencia y calcular y mostrar por pantalla el área y perímetro. Recuerde que
para calcular el área y el perímetro se utilizan las siguientes fórmulas:
area = PI * radio2
perimetro = 2 * PI * radio */

var radio = prompt("Ingrese el radio de la Circunferencia");

var area = Math.PI * (radio**2);

var perimetro = 2 * Math.PI * radio;

console.log(`El área de la Circunferencia es: ${area}`);

console.log(`El perímetro de la Circunferencia es: ${perimetro}`);