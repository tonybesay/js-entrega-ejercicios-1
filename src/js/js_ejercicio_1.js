// Ejercicio:
// Crea una página web con un botón que diga "Cambiar color". 
// Cada vez que el usuario haga clic en el botón, el color de fondo de la página debe cambiar a un color aleatorio.


// Funcion que genera un color aleatorio
function randomColor() {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random()* 256)
    const blue = Math.floor(Math.random()* 256)

    return [red, green, blue]
}

// Capturamos el botón
const button = document.querySelector("button")

// Función que cambia color de fondo cuando se haga click en el botón
button.addEventListener('click', (event) => {
    // Prevenimos evento por defecto
    event.preventDefault()
    
    const colorRgb = randomColor()
    document.body.style.backgroundColor = `rgb(${colorRgb})`
})