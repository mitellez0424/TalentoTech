let a = parseFloat(prompt("Ingresa el primer número:"));
let b = parseFloat(prompt("Ingresa el segundo número:"));
let c = parseFloat(prompt("Ingresa el tercer número:"));

let menor = a;
if (b < menor) menor = b;
if (c < menor) menor = c;

document.write("El menor es: " + menor);
