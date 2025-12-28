// 5. Calculadora Sencilla
// Objetivo: practicar formularios, eventos y lógica básica en JavaScript.

// ELEMENTOS DEL DOM
// ==============================
const sumarBtn = document.getElementById('sumarBtn')
const restarBtn = document.getElementById('restarBtn')
const multiplicarBtn = document.getElementById('multiplicarBtn')
const dividirBtn = document.getElementById('dividirBtn')

const numero1Input = document.getElementById('numero1')
const numero2Input = document.getElementById('numero2')
const pResultado = document.getElementById('pResultado')

// UTILIDADES
// ==============================
// Limpia el resultado anterior
function limpiarResultado() {
  pResultado.textContent = ''
  pResultado.classList.remove('error')
}

// Obtiene y valida los números
function getNumbers() {
  const n1 = Number(numero1Input.value)
  const n2 = Number(numero2Input.value)

  if (numero1Input.value === '' || numero2Input.value === '' || Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrarError('Introduce dos valores numéricos válidos')
    limpiarInputs()
    return null
  }

  return [n1, n2]
}

// Muestra error
function mostrarError(mensaje) {
  limpiarResultado()
  pResultado.textContent = mensaje
  pResultado.classList.add('error')
}

// Limpia inputs
function limpiarInputs() {
  numero1Input.value = ''
  numero2Input.value = ''
  numero1Input.focus()
}

// OPERACIONES
// ==============================
function sumar(n1, n2) {
  return n1 + n2
}

function restar(n1, n2) {
  return n1 - n2
}

function multiplicar(n1, n2) {
  return n1 * n2
}

function dividir(n1, n2) {
  if (n2 === 0) {
    mostrarError('No se puede dividir entre 0')
    return null
  }
  return n1 / n2
}

// EVENTOS
// ==============================
sumarBtn.addEventListener('click', () => {
  const numbers = getNumbers()
  if (!numbers) return

  const result = sumar(numbers[0], numbers[1])
  limpiarResultado()
  pResultado.textContent = result
  limpiarInputs()
})

restarBtn.addEventListener('click', () => {
  const numbers = getNumbers()
  if (!numbers) return

  const result = restar(numbers[0], numbers[1])
  limpiarResultado()
  pResultado.textContent = result
  limpiarInputs()
})

multiplicarBtn.addEventListener('click', () => {
  const numbers = getNumbers()
  if (!numbers) return

  const result = multiplicar(numbers[0], numbers[1])
  limpiarResultado()
  pResultado.textContent = result
  limpiarInputs()
})

dividirBtn.addEventListener('click', () => {
  const numbers = getNumbers()
  if (!numbers) return

  const result = dividir(numbers[0], numbers[1])
  if (result === null) return

  limpiarResultado()
  pResultado.textContent = result
  limpiarInputs()
})
