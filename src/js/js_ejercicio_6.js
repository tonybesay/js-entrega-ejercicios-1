// 6. Temporizador con Inicio, Pausa y Reinicio
// Objetivo del ejercicio: Practicar manejo de eventos, funciones de temporización y manipulación del DOM.
// Ejercicio:
// Crea una página con un temporizador que comience en 00:00:00. Incluye tres botones: “Iniciar”, “Pausar” y “Reiniciar”
// Al hacer clic en “Iniciar”, el temporizador debe comenzar a contar los segundos, minutos y horas.
// “Pausar” detiene el conteo pero mantiene el tiempo actual.
// “Reiniciar” pone el temporizador en 00:00:00.

// ELEMENTOS DEL DOM
const temporizadorElement = document.getElementById('temporizador')
const iniciarBtn = document.getElementById('iniciar')
const pausarBtn = document.getElementById('pausar')
const reiniciarBtn = document.getElementById('reiniciar')

// ESTADO INICIAL
let seconds = 0
let intervalId = null

// UTILIDADES
function formatTime(totalSeconds){
    const horas = Math.floor(totalSeconds / 3600)
    const minutos = Math.floor((totalSeconds % 3600) / 60)
    const segundos = totalSeconds % 60

    const hh = String(horas).padStart(2, '0')
    const mm = String(minutos).padStart(2, '0')
    const ss = String(segundos).padStart(2, '0')
    
    return `${hh}:${mm}:${ss}`
}

// FUNCIONES
function renderTime(seconds) {
    temporizadorElement.textContent = formatTime(seconds)
}

function startTimer() {
    if(intervalId != null) return

    intervalId = setInterval(() =>{
        seconds++
        renderTime(seconds)
    }, 1000)
}

function pauseTimer() {
    if(intervalId === null) return

    clearInterval(intervalId)
    intervalId = null
}

function resetTimer() {
    pauseTimer()
    seconds = 0
    renderTime(seconds)
}

// EVENTOS
iniciarBtn.addEventListener('click', startTimer)

pausarBtn.addEventListener('click', pauseTimer)

reiniciarBtn.addEventListener('click', resetTimer)