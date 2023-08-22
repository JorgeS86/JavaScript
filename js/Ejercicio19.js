/*19. Realizar un programa en Java donde se creen dos arreglos: el primero será un arreglo A
de 50 números reales, y el segundo B, un arreglo de 20 números, también reales. El
programa deberá inicializar el arreglo A con números aleatorios y mostrarlo por pantalla.
Luego, el arreglo A se debe ordenar de menor a mayor y copiar los primeros 10 números
ordenados al arreglo B de 20 elementos, y rellenar los 10 últimos elementos con el valor
0.5. Mostrar los dos arreglos resultantes: el ordenado de 50 elementos y el combinado
de 20.*/

let vectorA = new Array();
let vectorB = new Array();

function llenarVectorA() {
    for (let index = 0; index < 50; index++) {
        vectorA[index] = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    }
    //console.log(vectorA);
    vectorA.sort(compareNumeric);
    //console.log(vectorA);
}

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

function llenarVectorB() {
    
    for (let index = 0; index < 20; index++) {
        if (index < 10) {
            vectorB[index] = vectorA[index];
        }else{
            vectorB[index] = 0.5;
        }
    }
    //console.log(vectorA);
}

function mostrarVectores() {
    console.log(vectorA);
    console.log(vectorB);
}