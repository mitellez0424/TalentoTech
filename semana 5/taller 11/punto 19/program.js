let numero = parseInt(prompt("Ingresa un número:"));

document.write("Los divisores de " + numero + " son:");
for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
        document.write(i);
    }
}
