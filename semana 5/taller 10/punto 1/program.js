let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));

if (num1 > num2) {
    document.write(num1 + " es mayor.");
} else if (num2 > num1) {
    document.write(num2 + " es mayor.");
} else {
    document.write("Ambos números son iguales.");
}
