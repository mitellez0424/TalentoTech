let numero = parseInt(prompt("Ingresa un número:"));
let factorial = 1;

for (let i = 1; i <= numero; i++) {
    factorial *= i;
}
document.write("El factorial de " + numero + " es: " + factorial);
