/*24. Escribir un programa de JavaScript que a través de un formulario calcule el radio de un
circulo y lo muestre en el HTML.*/

function calcularCirculo() {
    let radio = document.getElementById("radio").value;
    console.log(radio);
    let area;
    let perimetro;

    calcularArea();
    calcularPerimetro();

    function calcularArea() {
        area = Math.PI * (radio) ** 2;
    }

    function calcularPerimetro() {
        perimetro = 2 * Math.PI * radio;
    }
    
    console.log(area);
    console.log(perimetro);

    const resArea = document.getElementById("resultadoArea");
    resArea.innerHTML += area;

    const resPerimetro = document.getElementById("resultadoPerimetro");
    resPerimetro.innerHTML += perimetro;
}
