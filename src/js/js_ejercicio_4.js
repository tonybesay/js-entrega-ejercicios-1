// 4. Filtro de Búsqueda en Tiempo Real
// Objetivo del ejercicio: Practicar la interacción entre eventos del DOM y lógica en JavaScript.
// Ejercicio:
// Crea una página con un campo de texto y una lista predefinida de elementos.
// Mientras el usuario escribe en el campo, la lista debe actualizarse en tiempo real para mostrar solo los elementos que contienen el texto escrito.
// Ejemplo: Si la lista contiene ["Perro", "Gato", "Pez"] y el usuario escribe "Ga", solo "Gato" debe quedar visible.

// Array de animales
const animals = [
  'Perro',
  'Gato',
  'Pez',
  'Conejo',
  'Caballo',
  'Vaca',
  'Oveja',
  'Cerdo',
  'Gallina',
  'Pato',
  'León',
  'Tigre',
  'Elefante',
  'Jirafa',
  'Cebra',
  'Mono',
  'Gorila',
  'Chimpancé',
  'Rinoceronte',
  'Hipopótamo',
  'Cocodrilo',
  'Serpiente',
  'Lagarto',
  'Tortuga',
  'Iguana',
  'Águila',
  'Halcón',
  'Búho',
  'Paloma',
  'Flamenco',
  'Pingüino',
  'Delfín',
  'Ballena',
  'Tiburón',
  'Pulpo',
  'Calamar',
  'Estrella de mar',
  'Cangrejo',
  'Langosta',
  'Caracol',
  'Mariposa',
  'Abeja',
  'Hormiga',
  'Araña',
  'Escorpión',
  'Ratón',
  'Murciélago',
  'Zorro',
  'Lobo'
]

// Seleccionamos elementos
const input = document.getElementById('inputFilter')
const ul = document.getElementById('list')

// Funcion para vaciar la lista
function clearList(){
    ul.innerHTML = ''
}

// Funcion para crear la lista
function createList(items){
    clearList()

    if (items.length === 0 ){
        const li = document.createElement('li')
        li.textContent = 'No hay coincidencias'
        ul.appendChild(li)
        return
    }

    items.forEach((item) => {
        const li = document.createElement('li')
        li.textContent = item
        ul.appendChild(li)
    }) 
}


// Crear lista en el HTML al cargar la pagina
createList(animals)


// Filtrar en tiempo real
input.addEventListener('input', (event) => {
    const textInput = event.target.value.trim().toLowerCase()

    // Si el input está vacio que muestre toda la lista
    if (!textInput){
        createList(animals)
        return
    }

    const filtered = animals.filter(animal => animal.toLowerCase().includes(textInput))
    createList(filtered)
})
 


