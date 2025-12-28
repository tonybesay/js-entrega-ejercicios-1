// 9. Lista de Tareas con LocalStorage
// - Añadir tareas
// - Marcar como completadas
// - Persistencia con localStorage
// - Limpiar completadas


// =====================
// ELEMENTOS DEL DOM
// =====================
const form = document.getElementById('form')
const taskInput = document.getElementById('taskInput')
const taskList = document.getElementById('taskList')
const clearCompletedBtn = document.getElementById('clearCompletedBtn')

// =====================
// VARIABLES
// =====================
let tasks = []

// =====================
// STORAGE
// =====================
const STORAGE_KEY = 'Task_list'

function saveTasks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
}

function loadTasks() {
    const json = localStorage.getItem(STORAGE_KEY)
    return JSON.parse(json)
}

// =====================
// FUNCIONES
// =====================
function addTask(task) {
    if (tasks === null || tasks.length === 0){
        tasks = []
    }
    tasks.push({
        id: Date.now(),
        text: task,
        done: false,
    })
}

function renderTasks() {
    taskList.textContent = ""

    if (tasks === null || tasks.length === 0) return

    tasks.forEach((task) => {
        // Crear el li
        const li = document.createElement('li')
        li.dataset.id = task.id
        li.classList.toggle('task-done', task.done)
        
        // crear checkbox
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.checked = task.done
        
        // crear span con el texto
        const text = document.createElement('span')
        text.textContent= task.text
        
        // crear boton para eliminar la tarea
        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'Eliminar'
        deleteBtn.type = 'button'
        deleteBtn.className = "delete_button"
        
        
        li.appendChild(checkbox)
        li.appendChild(text)
        li.appendChild(deleteBtn)
        
        taskList.appendChild(li)
    })
}

// =====================
// LISTENER
// =====================
form.addEventListener('submit', (event) => {
    event.preventDefault()

    addTask(taskInput.value)
    saveTasks()
    renderTasks()

    taskInput.value = ""
    taskInput.focus()
})

clearCompletedBtn.addEventListener('click', () => {
    tasks = tasks.filter((task) => task.done === false)
    saveTasks()
    renderTasks()
})

taskList.addEventListener('change', (event) => {
    const li = event.target.parentElement
    const id = Number(li.dataset.id)

    const filterTask = tasks.find((task) => task.id === id)
    filterTask.done = event.target.checked

    saveTasks()
    renderTasks()
})

taskList.addEventListener('click', (event) => {
    if (event.target.className !== 'delete_button') return
    const li = event.target.parentElement
    const taskId = Number(li.dataset.id)

    tasks = tasks.filter((task) => task.id !== taskId)
    
    saveTasks()
    renderTasks()
})


// =====================
tasks = loadTasks()
renderTasks()
// =====================


