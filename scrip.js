"use strict";

let curso = "Programación Web";
let descripcion = "Aprende HTML, CSS y JavaScript";
let precio = 15000;
let disponible = true;

// Obtener elementos del HTML
let nombreClase = document.querySelector("#nombreClase");
let descripcionClase = document.querySelector("#descripcionClase");
let precioClase = document.querySelector("#precioClase");

// Mostrar datos en la página
if (nombreClase) {
    nombreClase.innerHTML = curso;
}

if (descripcionClase) {
    descripcionClase.innerHTML = descripcion;
}

if (precioClase) {
    precioClase.innerHTML = "Precio: $" + precio;
}

// Mensaje al cargar la página
alert("Bienvenidos");

// Mostrar mensaje en consola
console.log("Hola");

// Evento del botón
let boton = document.querySelector("#boton");

if (boton) {
    boton.onclick = function () {

        if (disponible) {
            alert("Cupos disponibles");
        } else {
            alert("Curso completo");
        }

        document.body.style.backgroundColor = "lightblue";
    };
}