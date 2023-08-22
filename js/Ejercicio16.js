/*16. Realizar un programa que rellene dos vectores al mismo tiempo, con 5 valores aleatorios
y los muestre por pantalla.*/

let vector1 = new Array();
let vector2 = new Array();

function llenarVectores() {
    for (let index = 0; index < 5; index++) {
        vector1[index] = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
        vector2[index] = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    }
}

function mostrarVectores() {
    console.log(vector1);
    console.log(vector2);
}

