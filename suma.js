const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const resultado = document.getElementById('resultado');
let campoActual = 'num1';

function seleccionarCampo(campo) {
    campoActual = campo;
    if (campo === 'num1') {
        num1.focus();
    } else {
        num2.focus();
    }
}

function agregarNumero(valor) {
    const campo = campoActual === 'num1' ? num1 : num2;

    if (campo.value === '0') {
        campo.value = valor;
    } else {
        campo.value += valor;
    }

    if (resultado.textContent !== 'Resultado') {
        resultado.textContent = 'Resultado';
    }
}

function agregarNumero1() { agregarNumero('1'); }
function agregarNumero2() { agregarNumero('2'); }
function agregarNumero3() { agregarNumero('3'); }
function agregarNumero4() { agregarNumero('4'); }
function agregarNumero5() { agregarNumero('5'); }
function agregarNumero6() { agregarNumero('6'); }
function agregarNumero7() { agregarNumero('7'); }
function agregarNumero8() { agregarNumero('8'); }
function agregarNumero9() { agregarNumero('9'); }
function agregarNumero0() { agregarNumero('0'); }

function borrar() {
    num1.value = '';
    num2.value = '';
    resultado.textContent = 'Resultado';
    seleccionarCampo('num1');
}

function calcularResultado() {
    const primerNumero = Number(num1.value || 0);
    const segundoNumero = Number(num2.value || 0);
    const total = primerNumero + segundoNumero;
    resultado.textContent = total;
}

num1.addEventListener('focus', () => seleccionarCampo('num1'));
num2.addEventListener('focus', () => seleccionarCampo('num2'));

num1.value = '';
num2.value = '';
resultado.textContent = 'Resultado';
