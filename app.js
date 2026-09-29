"use strict";

console.log("CineVerse iniciado correctamente");

// BLOQUE 1: Acceso, diagnóstico del entorno y perfil

// 1. Identificación de la sesión

const parametrosURL = new URLSearchParams(window.location.search);
const usuarioURL = parametrosURL.get("usuario") ?? "Invitado";
const rolURL = parametrosURL.get("rol") ?? "Espectador";


console.log("---- PARÁMETROS URL ----");
console.log("Usuario recibido:", usuarioURL);
console.log("Rol recibido:", rolURL);
console.log("------------------------");

// Diagnóstico del entorno

const idiomaNavegador = navigator.language;
const estadoConexion = navigator.onLine;
const textoConexion = estadoConexion ? "Conectado" : "Sin conexión";

console.log("Idioma del navegador:", idiomaNavegador);
console.log("Estado de conexión:", estadoConexion);
console.log("Conexión:", textoConexion);

// Identificador único de sesión

const idSesion = crypto.randomUUID();

console.log("ID de sesión:", idSesion);

// Fecha actual

const fechaActual = new Date();

const fechaFormateada = fechaActual.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric"
});

console.log("Fecha formateada:", fechaFormateada);
