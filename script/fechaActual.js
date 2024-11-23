const fecha = document.querySelector('#fecha')

export function getDate() {
    const now = new Date()
    let dia = now.getDay()
    let diasEspecifico =  ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    let day = now.getDate()
    let month = now.getMonth() + 1
    let year = now.getFullYear()

    let formatedDate = `${diasEspecifico[dia]}-${month}/${day}/${year}`
    return formatedDate
}
export function fechaActual() {
    fecha.value = getDate()
}
