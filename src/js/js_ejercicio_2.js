// Ejercicio:
// Crea una página con un botón que diga "Contar clics" y un texto inicial que muestre "Clics: 0".
// Cada vez que se haga clic en el botón, el texto debe actualizarse para mostrar el número total de clics realizados.

// Seleccionamos el boton y el span donde vive el contador
const button = document.querySelector('button')
const counterElement = document.getElementById("counter")

// Inicializamos a cero por si en el HTML alguien cambia algo
let counter = 0
counterElement.textContent = counter

// Funcion que incrementa el counter
function incrementCounter() {
    counter++
    counterElement.textContent= counter
}

// Capuramos el evento y lo prevenimos
button.addEventListener('click', incrementCounter)