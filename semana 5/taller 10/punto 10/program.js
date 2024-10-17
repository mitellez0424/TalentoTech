let dia = parseInt(prompt("Ingresa un número (1-7):"));

switch (dia) {
    case 1: document.write("Lunes"); break;
    case 2: document.write("Martes"); break;
    case 3: document.write("Miércoles"); break;
    case 4: document.write("Jueves"); break;
    case 5: document.write("Viernes"); break;
    case 6: document.write("Sábado"); break;
    case 7: document.write("Domingo"); break;
    default: document.write("Número no válido.");
}
