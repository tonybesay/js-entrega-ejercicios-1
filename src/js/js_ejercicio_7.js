// 7. Generador de Contraseñas Aleatorias
// Objetivo del ejercicio: Practicar generación de cadenas aleatorias y uso de formularios.
// Ejercicio:
// Crea una página con un campo de entrada para especificar la longitud de una contraseña y un botón que diga “Generar contraseña”.
// - Al hacer clic en el botón, se debe mostrar una contraseña generada aleatoriamente usando letras, números y caracteres especiales.
// - Si la longitud es menor a 4 o el campo está vacío, muestra un mensaje de error indicando que la longitud debe ser mayor o igual a 4.

// VARIABLES
const minusculas = 'abcdefghijklmnopqrstuvwxyz'
const mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numeros = '0123456789'
const especiales = 'ºª!·$%&/()=?¿^*¨Ç;:_|@#¢÷[]{}+ç.-'
const variablesPass = [minusculas, mayusculas, numeros, especiales]

// ELEMENTOS DEL DOM
const form = document.getElementById("form")
const input = document.getElementById("input")
const pResultado = document.getElementById("pResultado")

// FUNCIONES
// Limpia el resultado anterior
function limpiarResultado() {
    pResultado.textContent = ''
    pResultado.classList.remove('error')
}

// Muestra error
function mostrarError(mensaje){
    pResultado.textContent = mensaje
    pResultado.classList.add('error')
    input.focus()
}
// Limpia input
function limpiarInputs() {
    input.value = ''
    input.focus()
}

// Comprobar que el input sea mayor a 4 caracteres
function checkPassLength(length) {
    if (length < 4) {
        mostrarError('La longitud debe ser mayor o igual a 4')
        return true
    }else if (length > 100) {
        mostrarError('La longitud es demasiado larga escriba un número del 4 al 100')
        return true
    }
    return false
}

// Generador de password
function generatePass(length) {
    // para la nueva contraseña seteamos password y letra vacios
    let password = ""
    let letra = ""
    // conseguimos un numero aleatorio del 1 al 4
    let num = Math.floor(Math.random() * 4);
    // Insertamos 4 carácteres, uno de cada tipo aleatoriamente
    for (let i = 0; i < 4; i++) {
        letra = Math.floor(Math.random() * variablesPass[num].length)
        password = password + variablesPass[num][letra]
        num++
        if (num > 3){
            num = 0
        }
    }
    // Agregamos el resto de caracteres aleatoriamente segun la logitud del input
    for (let i = 0; i < length-4; i++) {
        num = Math.floor(Math.random() * 4);
        letra = Math.floor(Math.random() * variablesPass[num].length)
        password = password + variablesPass[num][letra]
    }
    console.log('pass1',password)
    password = shuffleArray(password.split('')).join('')
    console.log(password)
    return password
}

// mezclar la constraseña para que el primer patron desaparezca
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
  }
  return arr
}

// EVENTOS
form.addEventListener('submit', (event) =>  {
    event.preventDefault()
    limpiarResultado()

    const length = Math.trunc(Number(input.value))
    if (checkPassLength(length)) return    
    const pass = generatePass(length)
    pResultado.textContent = pass
    limpiarInputs()
})