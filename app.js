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

// 2. Limpieza del correo

const correoEntrada = "  RENZO.DOMINGUEZ@CINEVERSE.COM  ";
const codigoSocio = 89;

// Limpieza y normalización del correo
const correoLimpio = correoEntrada.trim().toLowerCase();

// Separación del usuario y dominio
const partesCorreo = correoLimpio.split("@");
const nombreUsuario = partesCorreo[0];
const dominioCorreo = partesCorreo[1];

// Formateo del código de socio
const codigoSocioFormateado = String(codigoSocio).padStart(6, "0");

// Comprobaciones
console.log("---- DATOS DEL SOCIO ----");
console.log("Correo original:", correoEntrada);
console.log("Correo limpio:", correoLimpio);
console.log("Nombre de usuario:", nombreUsuario);
console.log("Dominio:", dominioCorreo);
console.log("Código socio original:", codigoSocio);
console.log("Código socio formateado:", codigoSocioFormateado);
console.log("--------------------------");

console.log("Tipo código original:", typeof codigoSocio);
console.log("Tipo código formateado:", typeof codigoSocioFormateado);

// 3. Asignación de preferencias

let apodo = "";
let tipoSuscripcion = null;
let entradasRegalo = 0;

console.log("---- PREFERENCIAS ORIGINALES ----");
console.log("Apodo:", apodo);
console.log("Suscripción:", tipoSuscripcion);
console.log("Entradas regalo:", entradasRegalo);

// Asignaciones lógicas
apodo ||= "Espectador VIP";
tipoSuscripcion ??= "Básica";
entradasRegalo ??= 2;

console.log("---- PREFERENCIAS ASIGNADAS ----");
console.log("Apodo:", apodo);
console.log("Suscripción:", tipoSuscripcion);
console.log("Entradas regalo:", entradasRegalo);
console.log("---------------------------------");