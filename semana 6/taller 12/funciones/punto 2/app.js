function convertirAMayusculas(array) {
  let nuevoArray = [];
  for (let i = 0; i < array.length; i++) {
    nuevoArray.push(array[i].toUpperCase());
  }
  return nuevoArray;
}
console.log(convertirAMayusculas(["hola", "mundo"]));
document.write(convertirAMayusculas(["manzana", "pera"]));
