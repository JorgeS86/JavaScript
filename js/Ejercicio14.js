/*14. Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor,
Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario
y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el
numero de páginas.*/

/*var libro = {
    isbn : 0,
    titulo : '',
    autor: '',
    paginas: 0,
}*/

function Libro(isbn,titulo,autor,paginas){
    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
}
var libro = new Libro();

function crearLibro(libro){
        libro.isbn = parseInt(prompt("Ingrese ISBN")),
        libro.titulo = prompt("Ingrese Titulo del Libro"),
        libro.autor = prompt("Ingrese el nombre del autor"),
        libro.paginas = parseInt(prompt("Ingrese cantidad de páginas"));
}

function mostrarLibro(libro){
    console.log(libro);
}