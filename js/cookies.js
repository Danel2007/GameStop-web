// Obtén una referencia a los elementos del DOM que necesitas
var cookiesDiv = document.getElementById("cookies");
var personalizarCookiesBtn = document.getElementById("customize");
var aceptarCookiesBtn = document.getElementById("accept");

// Agrega un evento de clic al botón "Personalizar cookies"
personalizarCookiesBtn.addEventListener("click", function () {
    cookiesDiv.style.display = "none"; // Oculta el div de las cookies
});

// Agrega un evento de clic al botón "Aceptar cookies"
aceptarCookiesBtn.addEventListener("click", function () {
    cookiesDiv.style.display = "none"; // Oculta el div de las cookies
});