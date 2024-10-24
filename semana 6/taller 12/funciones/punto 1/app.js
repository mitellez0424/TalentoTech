function encontrarNumeroMayor(array) {
  let mayor = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > mayor) {
      mayor = array[i];
    }
  }
  return mayor;
}
console.log("El numero mayor es = " + encontrarNumeroMayor([2, 7, 3, 9, 4])); //
document.write("El numero mayor es = " + encontrarNumeroMayor([2, 7, 3, 9, 4]));
alert("el numero mayor es = " + encontrarNumeroMayor([2, 7, 3, 9, 4]));