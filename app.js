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

// BLOQUE 2: Taquilla, tarifas y facturación

// 1. Parseo y validación del precio

const precioEntradaTexto = "12.50";

const precioEntrada = parseFloat(precioEntradaTexto);
const precioValido = !Number.isNaN(precioEntrada);

// Comprobaciones
console.log("---- PRECIO DE ENTRADA ----");
console.log("Precio original:", precioEntradaTexto);
console.log("Tipo original:", typeof precioEntradaTexto);
console.log("Precio convertido:", precioEntrada);
console.log("Tipo convertido:", typeof precioEntrada);
console.log("¿El precio es válido?:", precioValido);
console.log("----------------------------");

// 2. Conversión explícita del descuento

const descuentoTexto = "10";
const descuento = Number(descuentoTexto);
const descuentoValido = !Number.isNaN(descuento);

// Comprobaciones
console.log("---- DESCUENTO ----");
console.log("Descuento original:", descuentoTexto);
console.log("Tipo original:", typeof descuentoTexto);
console.log("Descuento convertido:", descuento);
console.log("Tipo convertido:", typeof descuento);
console.log("¿El descuento es válido?:", descuentoValido);
console.log("--------------------");

// 3. Cálculos de facturación

const importeDescuento = precioEntrada * descuento / 100;
const precioConDescuento = precioEntrada - importeDescuento;

const porcentajeIVA = 21;
const importeIVA = precioConDescuento * porcentajeIVA / 100;

const precioFinal = precioConDescuento + importeIVA;

// Comprobaciones
console.log("---- CÁLCULOS DE FACTURACIÓN ----");
console.log("Precio de entrada:", precioEntrada);
console.log("Descuento (%):", descuento);
console.log("Importe del descuento:", importeDescuento);
console.log("Precio con descuento:", precioConDescuento);
console.log("IVA (%):", porcentajeIVA);
console.log("Importe del IVA:", importeIVA);
console.log("Precio final:", precioFinal);
console.log("---------------------------------");

console.log("Tipo precio:", typeof precioEntrada);
console.log("Tipo descuento:", typeof descuento);
console.log("Tipo precio final:", typeof precioFinal);

// 4. Contador de entradas

let numeroEntradas = 1;

console.log("---- CONTADOR DE ENTRADAS ----");
console.log("Número inicial:", numeroEntradas);

++numeroEntradas;

console.log("Después del incremento:", numeroEntradas);
console.log("------------------------------");

// 5. Formateo de moneda

const formatoMoneda = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR"
});

const precioEntradaFormateado = formatoMoneda.format(precioEntrada);
const importeDescuentoFormateado = formatoMoneda.format(importeDescuento);
const precioConDescuentoFormateado = formatoMoneda.format(precioConDescuento);
const importeIVAFormateado = formatoMoneda.format(importeIVA);
const precioFinalFormateado = formatoMoneda.format(precioFinal);

// Comprobaciones
console.log("---- RESUMEN DE FACTURACIÓN ----");
console.log("Precio entrada:", precioEntradaFormateado);
console.log("Descuento:", importeDescuentoFormateado);
console.log("Precio con descuento:", precioConDescuentoFormateado);
console.log("IVA:", importeIVAFormateado);
console.log("TOTAL:", precioFinalFormateado);
console.log("--------------------------------");

console.log("Tipo precio final:", typeof precioFinal);
console.log("Tipo precio formateado:", typeof precioFinalFormateado);

// BLOQUE 3: Temporizador y control de estado

const tiempoGuardado = localStorage.getItem("tiempoRestante");

let tiempoRestante =
    tiempoGuardado !== null ? Number(tiempoGuardado) : 20;

let reservaActiva = tiempoRestante > 0;
let temporizadorReserva = null;

// Comprobación del tiempo recuperado
console.log("---- RECUPERACIÓN DEL TEMPORIZADOR ----");
console.log("Valor almacenado:", tiempoGuardado);
console.log("Tiempo utilizado:", tiempoRestante);
console.log("Tipo:", typeof tiempoRestante);
console.log("---------------------------------------");

// Comprobación del estado inicial
console.log("---- ESTADO INICIAL DE LA RESERVA ----");
console.log("Tiempo restante:", tiempoRestante);
console.log("¿Reserva activa?:", reservaActiva);
console.log("--------------------------------------");

// Temporizador de la oferta
if (reservaActiva && temporizadorReserva === null) {
    temporizadorReserva = setInterval(() => {
        tiempoRestante--;

        localStorage.setItem("tiempoRestante", tiempoRestante);

        console.log(`Tiempo restante: ${tiempoRestante} segundos`);

        if (tiempoRestante <= 0) {
            clearInterval(temporizadorReserva);

            temporizadorReserva = null;
            reservaActiva = false;

            console.log("La reserva ha expirado.");
            console.log("Estado final de la reserva:", reservaActiva);
        }
    }, 1000);
} else {
    console.log("La reserva ya había expirado.");
}

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