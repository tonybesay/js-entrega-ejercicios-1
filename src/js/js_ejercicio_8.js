// Contador de Palabras y Caracteres
// Objetivo del ejercicio: Practicar eventos en tiempo real y manipulación avanzada del DOM.
// Ejercicio:
// Crea una página con un campo de texto donde el usuario pueda escribir un párrafo.
// Muestra en tiempo real el número de caracteres y palabras ingresados debajo del campo.
// Palabras deben ser separadas por espacios, y los caracteres no deben incluir espacios ni saltos de línea.


// VARIABLES
// =================
const textArea = document.getElementById("textArea")
const nLetras = document.getElementById("nLetras")
const nPalabras = document.getElementById("nPalabras")

// FUNCIONES 
// ================
function lettersCounter(text) {
    let numeroLetras = text.trim().replace(" ","")
    nLetras.textContent = numeroLetras.length
}

function wordsCounter(str){
    let numeroPalabras = str.trim().split(" ")
    nPalabras.textContent = numeroPalabras.length
    if(textArea.value === ""){
        nPalabras.textContent = "0"
    } 
}

// EVENTOS
textArea.addEventListener('input', () => {
    lettersCounter(textArea.value)
    wordsCounter(textArea.value)
})
