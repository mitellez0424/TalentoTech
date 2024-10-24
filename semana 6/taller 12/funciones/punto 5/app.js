function obtenerPropiedades(objeto) {
  return Object.keys(objeto);
  }
  console.log(obtenerPropiedades({a: 1, b: 2, c: 3}));
  document.write(obtenerPropiedades({a: 1, b: 2, c: 3}));
alert(obtenerPropiedades({a: 1, b: 2, c: 3}));