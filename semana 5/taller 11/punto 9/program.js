let calificacion = parseFloat(prompt("Ingresa una calificación (0-100):"));

if (calificacion >= 90) {
    document.write("A");
} else if (calificacion >= 80) {
    document.write("B");
} else if (calificacion >= 70) {
    document.write("C");
} else if (calificacion >= 60) {
    document.write("D");
} else {
    document.write("F");
}
