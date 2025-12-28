// Ejercicio:
// Crea una página con un campo de texto, un botón que diga "Agregar", y una lista vacía debajo.
// Cuando el usuario escriba un texto y haga clic en "Agregar", el texto debe añadirse como un nuevo elemento de la lista.
// Añade un botón al lado de cada elemento para eliminarlo de la lista.

// Seleccionamos elementos
const form = document.getElementById('addForm')
const input = document.getElementById('inputContent')
const dinamicList = document.getElementById('dinamicList')

// Crea y añade un <li> con su botón de eliminar
function addElementToList(text) {
  const li = document.createElement('li')
  li.className = 'list-item'

  const span = document.createElement('span')
  span.textContent = text

  const deleteButton = document.createElement('button')
  deleteButton.type = 'button'
  deleteButton.className = 'delete_button'
  deleteButton.textContent = 'Eliminar'

  li.appendChild(span)
  li.appendChild(deleteButton)
  dinamicList.appendChild(li)
}

// Añadir elemento usando el submit del formulario
form.addEventListener('submit', (event) => {
  event.preventDefault()

  const value = input.value.trim()
  if (!value) {
    input.focus()
    return
  }

  addElementToList(value)
  input.value = ''
  input.focus()
})

// Eliminar elemento (delegación de eventos)
dinamicList.addEventListener('click', (event) => {
  const deleteBtn = event.target.closest('.delete_button')
  if (!deleteBtn) return

  const li = deleteBtn.closest('li')
  if (li) li.remove()
})
