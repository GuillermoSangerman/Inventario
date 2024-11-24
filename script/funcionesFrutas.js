import { tuTiFruti } from "./dataFrutas.js";

const listGroup = document.querySelector('.list-group')


/**
 * Este ejercicio constara de varias partes:
 * Utiliza query selector para llamar el Ul que se encuentra en el html
 * Cre una funcion llamada mostrarFrutas 
 * Dentro de la funcion: itera el array que creaste en el punto 1
 * Dentro del ciclo for: crea una variable  llamada fruta, y asignale tuArray[index]  
 * Dentro del ciclo for:  haz un console.log con cada una de las llaves que se encuentra dentro del objeto fruta. 
 * Fuera de la funcion ejecuta llama la funcion mostrarFrutas. 
 * */
export function mostrarFrutas() {
    listGroup.innerHTML = "" ;
    for (let i = 0; i < tuTiFruti.length; i++) {
        const frutas = tuTiFruti[i];
        generarTemplate(frutas.id, frutas.fruta, frutas.cantidad);
    }
}
/**
 * Este ejercicio constara de varias partes:
 * crea una funcion llamada generarTemplate que reciba 3 parametros id, fruta, cantidad 
 * Dentro de la funcion: crea una variable template  y asignale (dentro de comillas invertidas) unos de los li que se encuentran en tu html.
 * Sustituye los valores valores del template utilizando ${parametro correspondiente}
 * Llama el elemento html (ul)  y utilizando innerHTML  asignale el template
 * En la funcion MostrarFrutas elimina los console.log y llama la funcion generarTemplate y envia los parametros necesarios.
 * Fuera del ciclo for de  la funcion mostrarFrutas: Llama el elemento html (ul)  y utilizando innerHTML inicializalo con comillas vacias.
 * Nota: en el navegador deberias ser capaza de ver todas las frutas de tu array
 */
export function generarTemplate(id, fruta, cantidad) {
    let color = ""
    if (cantidad >= 50) {
        color = "bg-success text-white"
    } else if(cantidad <= 49 && cantidad >= 11){
        color = "bg-primary text-white"
    }else if (cantidad <= 10 && cantidad >= 1) {
        color = "bg-warning"
    }else{
        color = "bg-danger text-white"
    }
    const fruta_template = `
    <button class="list-group-item  text-start bg-dark bg-opacity-75 text-white fs-5" id="${id}">${fruta} <span class="badge ${color} text-black rounded-pill" >${cantidad} unidades</span></button>
    `
    listGroup.innerHTML += fruta_template ;
}
/**
 * Este ejercicio constara de varias partes:
 * Cre una funcion llamada mostrarAlertaDeFrutas 
 * Dentro de la Funcion: Llama el elemento html (ul)  y utilizando innerHTML inicializalo con comillas vacias.
 * Dentro de la funcion: itera el array que creaste en el punto 1
 * Dentro del ciclo for: crea una condicion que valide las frutas menores o iguales a 4
 * Dentro de la condicion: crea una variable  llamada fruta, y asignale tuArray[index]  
 * Dentro de la condicion:  llama la funcion generate Template y pasale los parametross correspondientes (esto parametros vienen del objeto fruta)
 * Fuera de la funcion ejecuta llama la funcion mostrarAlertaDeFrutas
 * Nota: en el navegador deberias ser capaza de ver todas las frutas que son menores que 4 en tu array
 * */
export function mostrarAlertaDeFrutas() {
    listGroup.innerHTML = ""
    for (let i = 0; i < tuTiFruti.length; i++) {
        const frutas = tuTiFruti[i];
        if (frutas.cantidad <= 10 && frutas.cantidad >= 1) {
            const fruta = tuTiFruti[i]; 
            generarTemplate(fruta.id, fruta.fruta, fruta.cantidad);
        } 
    }
}
export function mostrarSinExistenciaDeFrutas() {
    listGroup.innerHTML = ""
    for (let i = 0; i < tuTiFruti.length; i++) {
        const frutas = tuTiFruti[i];
        if (frutas.cantidad <= 0) {
            const fruta = tuTiFruti[i]; 
            generarTemplate(fruta.id, fruta.fruta, fruta.cantidad);
        } 
    }
}
export function mostrarExcesoDeFrutas() {
    listGroup.innerHTML = ""
    for (let i = 0; i < tuTiFruti.length; i++) {
        const frutas = tuTiFruti[i];
        if (frutas.cantidad >= 50) {
            const fruta = tuTiFruti[i]; 
            generarTemplate(fruta.id, fruta.fruta, fruta.cantidad);
        } 
    }
}
// mostrarAlertaDeFrutas()
 /**  * En el diseño original las frutas cuya cantidad es menor o igual que tres tienen un background color diferente, modifica la funcion generar template para que tenga este mismo comportamiento (puedes jugar con las clases: bg-warning bg-primary para lograr tu objetivo) 
*/