function sumarNumeros(array){
  let suma = 0;
  for (let i = 0; i < array.length; i++){
    suma += array[i];

  }
  return suma;
}

console.log(sumarNumeros([1,2,3,4,5,6]));
document.write(sumarNumeros([1,2,3,4,5,6]));
alert(sumarNumeros([1,2,3,4,5,6]));