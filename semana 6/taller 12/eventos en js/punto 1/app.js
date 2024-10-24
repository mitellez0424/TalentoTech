var boton = document.getElementById("miBoton");
boton.addEventListener("click", function () {
  document.body.style.backgroundColor = "yellow";
});

var boton2 = document.getElementById('miBoton2');
boton2.addEventListener("click",function(){
    boton2.style.backgroundColor = "blue"
    document.body.style.backgroundColor = "green"
})