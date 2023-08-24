/*23. Resalte todas las palabras de más de 8 caracteres en el texto del párrafo (con un fondo
amarillo, por ejemplo)*/

let parrafo = document.getElementsByName("parrafo");
let arrayParrafo = new Array();

parrafo.forEach(e => {
    arrayParrafo = e.textContent.split(" ");
    //console.log(arrayParrafo); 
});

let textoModif = medirPal();

function medirPal(){
let palabraLarga = new Array();
for (let index = 0; index < arrayParrafo.length; index++) {
    if (arrayParrafo[index].length >= 8) {
        palabraLarga[index] = `<span class="resaltar">${arrayParrafo[index]}</span>`
    } else {
       palabraLarga[index] = arrayParrafo[index];
    }
    //console.log(palabraLarga);
}
return palabraLarga.join(" ");

}
//console.log(textoModif);

for (const e of parrafo) {
    e.innerHTML = textoModif;
}