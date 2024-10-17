let cadena = prompt("Ingresa una cadena:");
let vocales = 0, consonantes = 0;

for (let letra of cadena.toLowerCase()) {
    if ("aeiou".includes(letra)) {
        vocales++;
    } else if (/[a-z]/.test(letra)) {
        consonantes++;
    }
}

document.write("Vocales: " + vocales);
document.write("Consonantes: " + consonantes);
