let display = document.getElementById('display');

function input(value) {
    display.value += value;  // Agrega el valor de cada botón presionado al campo de texto
}

function clearDisplay() {
    display.value = '';  // Borra todo lo que hay en el campo de texto
}

function deleteLast() {
    display.value = display.value.slice(0, -1);  // Elimina el último carácter
}

function calculate() {
    try {
        display.value = eval(display.value);  // Evalúa la expresión matemática
    } catch (error) {
        display.value = 'Error';  // Muestra un error si la expresión no es válida
    }
}

// Detectar tecla "Enter" para hacer el cálculo
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        calculate();
    }
});
