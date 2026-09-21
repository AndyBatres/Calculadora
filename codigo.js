let num1 = document.getElementById("num1");
let resultado = document.getElementById("resultado");

function Numero(dato) {
    let valorActual = num1.value;
    num1.value = valorActual + dato;
    if (resultado.textContent !== "Resultado") {
        resultado.textContent = "Resultado";
    }
}

function borrar() {
    num1.value = "";
    resultado.textContent = "Resultado";
}

function Calcular() {

    let valor = eval(num1.value);
    if (valor == undefined) {
        num1.value = "0";
        resultado.textContent = "0";
        valor.textContent = "0"
    }
    else if (valor == Infinity) {
        num1.value = "Error";
        resultado.textContent = "Error";
        valor.textContent = "Error";
    } else {
        resultado.textContent = valor;
    }
    num1.value = valor;

}