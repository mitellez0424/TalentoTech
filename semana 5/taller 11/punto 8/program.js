let a = parseFloat(prompt("Ingresa el primer número:"));
let b = parseFloat(prompt("Ingresa el segundo número:"));
let c = parseFloat(prompt("Ingresa el tercer número:"));

if ((a > b && a < c) || (a > c && a < b)) {
    document.write("El número del medio es: " + a);
} else if ((b > a && b < c) || (b > c && b < a)) {
    document.write("El número del medio es: " + b);
} else {
    document.write("El número del medio es: " + c);
}
