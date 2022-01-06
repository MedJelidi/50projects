const input = document.querySelector('input')
const list = document.querySelector('.list')
let items = []
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        if (input.value.length === 0) return;
        addTodo(input.value, false, true)
        input.value = ''
    }
})

function loadCachedTodos() {
    let cachedTodos = JSON.parse(localStorage.getItem('todos'))
    if (cachedTodos) {
        cachedTodos = Array.from(cachedTodos)
        cachedTodos.forEach(todo => {
            addTodo(todo.todo, todo.completed, false)
        })
    }
}

function addTodo(todo, completed, withCache) {
    const item = document.createElement('div')
    item.classList.add(...['element', 'item'])
    if (completed) item.classList.add('completed')
    item.innerText = todo
    list.append(item)
    items.push(item)
    if (withCache) addToCache(todo)
    item.addEventListener('click', () => {
        const indexOfItem = items.indexOf(item)
        item.classList.toggle('completed')
        if (item.classList.contains('completed')) {
            editCache(indexOfItem, true)
        } else {
            editCache(indexOfItem, false)
        }
    })
    item.addEventListener('contextmenu', (e) => {
        e.preventDefault()
        const indexOfItem = items.indexOf(item)
        removeFromCache(indexOfItem)
        item.remove()
    })

}

function addToCache(todo) {
    let cachedTodos = JSON.parse(localStorage.getItem('todos'))
    if (!cachedTodos) {
        localStorage.setItem('todos', JSON.stringify([{ todo, completed: false }]))
    } else {
        localStorage.setItem('todos', JSON.stringify([...cachedTodos, { todo, completed: false }]))
    }
}

function removeFromCache(index) {
    let cachedTodos = JSON.parse(localStorage.getItem('todos'))
    console.log(cachedTodos)
    console.log(index)
    items.splice(index, 1)
    cachedTodos.splice(index, 1)
    console.log(cachedTodos)
    localStorage.setItem('todos', JSON.stringify([...cachedTodos]))
}

function editCache(index, completed) {
    let cachedTodos = JSON.parse(localStorage.getItem('todos'))
    cachedTodos[index].completed = completed
    localStorage.setItem('todos', JSON.stringify([...cachedTodos]))
}

loadCachedTodos()