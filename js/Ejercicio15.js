/*Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo
con la propiedad radio. Nota: Cree dos métodos para calcular el área y el perímetro. El
radio del círculo lo proporcionará el usuario.*/

function Circulo(radio){
    this.radio = radio;
}
var circ = new Circulo();

function crearCirculo(circ){
        circ.radio = parseInt(prompt("Ingrese Radio del Circulo"));
}

function mostrarCirculo(circ){
    console.log(circ);
}

function area(circ){
area = Math.PI * (circ.radio)**2;
console.log("El área del circulo es: "+area);
}

function perimetro(circ){
    perimetro = Math.PI * (circ.radio) * 2;
    console.log("El perímetro del circulo es: "+perimetro);
    }