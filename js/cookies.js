<<<<<<< HEAD
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
=======
//no hemos dado clase(resumen: hace que las cookies se quiten)
const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
const avisoCookies = document.getElementById('aviso-cookies');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

dataLayer = [];

// Mostrar el aviso de cookies siempre que se cargue la página
avisoCookies.classList.add('activo');
fondoAvisoCookies.classList.add('activo');

// Agregar evento al botón para aceptar cookies
botonAceptarCookies.addEventListener('click', () => {
    // Ocultar el aviso cuando se hace clic en aceptar
    avisoCookies.classList.remove('activo');
    fondoAvisoCookies.classList.remove('activo');

    // Registrar el evento de aceptación de cookies
    dataLayer.push({'event': 'cookies-aceptadas'});
});
>>>>>>> 090979441441f0b8f78692e4c2885f60ea6c31e0
