/*17. Realizar un programa que elimine los dos últimos elementos de un array. Mostrar el
resultado*/

let array = new Array();

function llenarVectores() {
    for (let index = 0; index < 5; index++) {
        array[index] = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    }
}

function mostrarVectores() {
    console.log(array);
}

function borrarUltimo(){
    console.log(array.slice(0,array.length-2));
}