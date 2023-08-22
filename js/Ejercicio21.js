/*21. Escribir un programa para obtener un array de las propiedades de un objeto Persona.
Las propiedades son nombre, edad, sexo ('H' hombre, 'M' mujer, 'O' otro), peso y altura.*/

function Persona(nombre, edad, sexo, peso, altura) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
}
var persona = new Persona();

function crearPersona() {
    persona = {
        nombre: prompt("Ingrese nombre"),
        edad: parseInt(prompt("Ingrese Edad")),
        sexo: prompt("Ingrese Sexo (H / M / O)"),
        peso: parseFloat(prompt("Ingrese Peso")),
        altura: parseFloat(prompt("Ingrese Altura")),
    };
}

function mostrarPersona() {
    console.log(persona);
}

function mostrarArray() {
    let array = [
        persona.nombre,
        persona.edad,
        persona.sexo,
        persona.peso,
        persona.altura,
    ];

    console.log(array);
}