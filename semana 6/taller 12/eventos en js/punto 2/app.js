var parrafo = document.getElementById("miParrafo");
document.addEventListener("keydown", function (event) {
  parrafo.innerHTML = "Presionaste la tecla " + event.key;
});
