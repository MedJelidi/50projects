const card = document.querySelector('.card')
let userList = document.querySelector('.user-list')
const loading = document.querySelector('.loading-container')
const input = document.querySelector('input')
let users

async function fetchUsers() {
    const url = 'https://randomuser.me/api?results=50'
    let r = await fetch(url)
    r = await r.json()
    const users = r.results
    loading.remove()
    return users
}

function populateList(users) {
    userList.remove()
    userList = document.createElement('div')
    userList.classList.add('user-list')
    users.forEach(u => {
        const location = document.createElement('h5')
        location.innerText = `${u.location.city}, ${u.location.country}`
        const name = document.createElement('h4')
        name.innerText = `${u.name.first} ${u.name.last}`
        const userInfo = document.createElement('div')
        userInfo.classList.add('user-info')
        userInfo.append(name)
        userInfo.append(location)
        const img = document.createElement('img')
        img.src = u.picture.thumbnail
        const userItem = document.createElement('div')
        userItem.classList.add('user-item')
        userItem.append(img)
        userItem.append(userInfo)
        userList.append(userItem)
        card.append(userList)
    })
}

function onSearch(query) {
    const searchedUsers = users.filter(u => {
        const fullName = `${u.name.first} ${u.name.last}`.toLowerCase()
        const location = `${u.location.city}, ${u.location.country}`.toLowerCase()
        query = query.toLowerCase()
        return fullName.includes(query) || location.includes(query)
    })
    populateList(searchedUsers)
}

input.addEventListener('input', () => onSearch(input.value))

fetchUsers().then(u => {
    users = u
    populateList(users)
})