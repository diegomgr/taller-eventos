const btnDiv = document.querySelector("div");
const btn = document.getElementById("btn")

btn.addEventListener("click", (event) => {
  event.stopPropagation();
  alert('Hola!') 
});

btnDiv.addEventListener("click", function() {
    alert('Hola! Soy el div');
});