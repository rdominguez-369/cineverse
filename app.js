"use strict";

console.log("CineVerse iniciado correctamente");

// BLOQUE 1: Acceso, diagnóstico del entorno y perfil

// 1. Identificación de la sesión

const parametrosURL = new URLSearchParams(window.location.search);

const usuarioURL = parametrosURL.get("usuario") ?? "Invitado";
const rolURL = parametrosURL.get("rol") ?? "Espectador";


// 2. Diagnóstico del entorno

const idiomaNavegador = navigator.language;

const estadoConexion = navigator.onLine;
const textoConexion = estadoConexion ? "Conectado" : "Sin conexión";

const idSesion = crypto.randomUUID();

const fechaActual = new Date();

const fechaFormateada = fechaActual.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric"
});


// 3. Limpieza del correo y código de socio

const correoEntrada = "  RENZO.DOMINGUEZ@CINEVERSE.COM  ";
const codigoSocio = 89;

const correoLimpio = correoEntrada.trim().toLowerCase();

const partesCorreo = correoLimpio.split("@");
const nombreUsuario = partesCorreo[0];
const dominioCorreo = partesCorreo[1];

const codigoSocioFormateado = String(codigoSocio).padStart(6, "0");


// 4. Asignación de preferencias

let apodo = "";
let tipoSuscripcion = null;
let entradasRegalo = 0;

apodo ||= "Espectador VIP";
tipoSuscripcion ??= "Básica";
entradasRegalo ??= 2;


// 5. Mostrar información del perfil en la interfaz

const elementoUsuario = document.getElementById("perfil-usuario");
const elementoRol = document.getElementById("perfil-rol");
const elementoIdioma = document.getElementById("perfil-idioma");
const elementoEstadoRed = document.getElementById("estado-red");
const elementoFecha = document.getElementById("perfil-fecha");

elementoUsuario.textContent = usuarioURL;
elementoRol.textContent = rolURL;
elementoIdioma.textContent = idiomaNavegador;
elementoEstadoRed.textContent = textoConexion;
elementoFecha.textContent = fechaFormateada;

// BLOQUE 2: Taquilla, tarifas y facturación

const precioEntradaTexto = "8.50€";
const precioComboTexto = "12.00€";

const precioEntrada = parseFloat(precioEntradaTexto);
const precioCombo = parseFloat(precioComboTexto);

const subtotal = precioEntrada + precioCombo;

const subtotalValido = !Number.isNaN(subtotal);

const descuentoTexto = "3";
const descuento = Number(descuentoTexto);

const subtotalConDescuento = subtotal - descuento;

const porcentajeIVA = 21;
const importeIVA = subtotalConDescuento * porcentajeIVA / 100;

const totalPagar = subtotalConDescuento + importeIVA;

let numeroReserva = 1000;
++numeroReserva;

const formatoMoneda = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR"
});

const elementoSubtotal = document.getElementById("subtotal");
const elementoDescuento = document.getElementById("descuento");
const elementoIVA = document.getElementById("iva");
const elementoTotal = document.getElementById("total");

if (subtotalValido) {
    elementoSubtotal.textContent = formatoMoneda.format(subtotal);
    elementoDescuento.textContent = formatoMoneda.format(descuento);
    elementoIVA.textContent = formatoMoneda.format(importeIVA);
    elementoTotal.textContent = formatoMoneda.format(totalPagar);
}

console.log("---- BLOQUE 2: FACTURACIÓN ----");
console.log("Precio entrada:", precioEntrada);
console.log("Precio combo:", precioCombo);
console.log("Subtotal:", subtotal);
console.log("¿Subtotal válido?:", subtotalValido);
console.log("Descuento:", descuento);
console.log("Subtotal con descuento:", subtotalConDescuento);
console.log("IVA:", importeIVA);
console.log("Total:", totalPagar);
console.log("Número de reserva:", numeroReserva);
console.log("--------------------------------");

// BLOQUE 3: Promoción "Venta Anticipada"

const botonDescuentoFlash = document.getElementById("btn-descuento-flash");
const contadorFlash = document.getElementById("contador-flash");

let tiempoRestante = 20;
let temporizadorFlash = null;

botonDescuentoFlash.addEventListener("click", () => {
    if (temporizadorFlash !== null) {
        return;
    }

    tiempoRestante = 20;
    contadorFlash.textContent = tiempoRestante;

    temporizadorFlash = setInterval(() => {
        tiempoRestante--;

        contadorFlash.textContent = tiempoRestante;

        console.log("Tiempo restante:", tiempoRestante);

        if (tiempoRestante <= 0) {
            clearInterval(temporizadorFlash);
            temporizadorFlash = null;

            console.log("Temporizador detenido:", temporizadorFlash);

            alert("La promoción ha caducado.");
        }
    }, 1000);
});

// BLOQUE 4: Reseñas de películas, seguridad y persistencia

const campoOpinion = document.getElementById("opinion");
const botonEnviarResena = document.getElementById("btn-enviar-resena");
const listaResenas = document.getElementById("lista-resenas");
const CLAVE_RESENAS = "cineverse_resenas";

// Recuperar las reseñas almacenadas
function cargarResenas() {
    const datosGuardados = localStorage.getItem(CLAVE_RESENAS);

    if (datosGuardados === null) {
        return [];
    }

    try {
        return JSON.parse(datosGuardados);
    } catch (error) {
        console.error("Error al recuperar las reseñas:", error);
        return [];
    }
}

// Guardar las reseñas en localStorage
function guardarResenas(resenas) {
    try {
        const resenasJSON = JSON.stringify(resenas);
        localStorage.setItem(CLAVE_RESENAS, resenasJSON);
    } catch (error) {
        console.error("Error al guardar las reseñas:", error);
    }
}

// Mostrar las reseñas de forma segura en el DOM
function renderizarResenas() {
    const resenas = cargarResenas();

    listaResenas.textContent = "";

    resenas.forEach((resena) => {
        const articulo = document.createElement("article");

        const socio = document.createElement("strong");
        socio.textContent = resena.socio;

        const hora = document.createElement("span");
        hora.textContent = ` - ${resena.hora}`;

        const opinion = document.createElement("p");
        opinion.textContent = resena.opinion;

        articulo.appendChild(socio);
        articulo.appendChild(hora);
        articulo.appendChild(opinion);

        listaResenas.appendChild(articulo);
    });
}

// Registrar una nueva reseña
botonEnviarResena.addEventListener("click", () => {
    const opinion = campoOpinion.value.trim();

    if (opinion === "") {
        console.log("No se puede enviar una reseña vacía.");
        return;
    }

    const fechaCreacion = Date.now();
    const horaEnvio = new Date().toLocaleTimeString("es-ES");

    const nuevaResena = {
        timestamp: fechaCreacion,
        socio: usuarioURL,
        hora: horaEnvio,
        opinion: opinion
    };

    const resenas = cargarResenas();

    resenas.push(nuevaResena);

    guardarResenas(resenas);
    renderizarResenas();

    campoOpinion.value = "";
});

// Mostrar las reseñas almacenadas al cargar la página
renderizarResenas();