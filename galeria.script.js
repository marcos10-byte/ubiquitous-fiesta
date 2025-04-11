 document.getElementById("formularioComputacion").addEventListener("submit", function(event) {
      event.preventDefault(); // Evita que se recargue la página
      alert("¡Gracias por contestar!");
      this.reset(); // Limpia el formulario si quieres
    });