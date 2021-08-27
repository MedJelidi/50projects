const btn = document.querySelector('.btn')
const joke = document.querySelector('.joke')

btn.addEventListener('click', () => {
    fetch('https://icanhazdadjoke.com/', {headers: {'Accept': 'application/json'}})
        .then(response => response.json())
        .then(data => joke.innerHTML = data.joke)
})
