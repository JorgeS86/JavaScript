/*25. Escriba una función de JavaScript para obtener los valores de Nombre y Apellido del
siguiente formulario.*/

function getFormValores() {
    event.preventDefault();
    let nombre = document.getElementById("form1").nombre.value;
    let apellido = document.getElementById("form1").apellido.value;

    console.log("Nombre:", nombre);
    console.log("Apellido:", apellido);
}


/*===== JAVASCRIPT ======
function getFormValores() {
    let nombre = document.getElementsByName("nombre")[0].value;
    let apellido = document.getElementById("apellido").value;
    // [0] es porque getElementsByName() devuelve una lista de elementos con el nombre especificado. 
    // Si solo hay un elemento con ese nombre, como en este caso, entonces ese elemento es el primer elemento de la lista.
    // Por lo tanto, para obtener el valor del elemento correcto, debe especificar el índice [0]
    // Si hubiera más de un elemento con el mismo nombre, entonces debería usar un bucle para recorrer la lista y obtener los valores de cada elemento.
    // !!! ES BUENA PRACTICA TRABAJAR CON ID QUE CON NOMBRE !!! -> TRABAJAN SIN INDICE

    document.getElementById("texto").innerHTML = "Nombre: " + nombre + "<br>Apellido: " + apellido;
    confirm("Seguro que su nombre es: " + nombre + " , " + apellido + " ?");

}*/