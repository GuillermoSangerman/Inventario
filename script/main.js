import { mostrarFrutas, mostrarAlertaDeFrutas } from "./funcionesFrutas.js"
import { mostrarSinExistenciaDeFrutas, mostrarExcesoDeFrutas } from "./funcionesFrutas.js"
import { fechaActual } from "./fechaActual.js"
import { modal } from "./funcionesFrutas.js"

const todas = document.querySelector('#todas')
const alerta = document.querySelector('#alert')
const excesos = document.querySelector('#excesos')
const sinExistencia = document.querySelector('#sinExistencia')
const clickEnFrutas = document.querySelector('.list-group-item')
mostrarFrutas()
fechaActual()
/**
 * utilizando querySelector llama el boton con nombre todas
 * Agrega un escuchador de evento de tipo click al boton todas
 * pasale la funcion cargarFrutas al escuchador de eventos
 */
todas.addEventListener('click', mostrarFrutas)
/**
 * utilizando querySelector llama el boton con nombre alerta
 * Agrega un escuchador de evento de tipo click al boton alerta
 * pasale la funcion mostrarAlertaDeFrutas al escuchador de eventos
 */
alerta.addEventListener('click', mostrarAlertaDeFrutas)
excesos.addEventListener('click', mostrarExcesoDeFrutas)
sinExistencia.addEventListener('click', mostrarSinExistenciaDeFrutas)
clickEnFrutas.addEventListener('click', modal)
// const valentines = new Date("1995-02-14");
// const day = valentines.getDay();
// const dayNames = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

// console.log(dayNames[day]); // "Monday"