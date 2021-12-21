const URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const container = document.querySelector('.container')
const searchInput = document.querySelector('#search-container > input')
let movies = []
fetch(URL)
  .then((r) => {
    return r.json()
  })
  .then((f) => {
    movies = f.results
    displayMovies(movies)
  })

function displayMovies(movies) {
  movies.forEach((m) => {
    const ratingNumber = document.createElement('div')
    ratingNumber.classList.add('rating-number')
    ratingNumber.innerText = m.vote_average
    ratingNumber.style.color = +m.vote_average > 8 ? 'greenyellow' : 'orange'

    const movieRating = document.createElement('div')
    movieRating.classList.add('movie-rating')

    movieRating.appendChild(ratingNumber)

    const movieTitle = document.createElement('div')
    movieTitle.classList.add('movie-title')
    movieTitle.innerText = m.title

    const cardInfo = document.createElement('div')
    cardInfo.classList.add('card-info')
    cardInfo.appendChild(movieTitle)
    cardInfo.appendChild(movieRating)

    const img = document.createElement('img')
    img.src = 'https://image.tmdb.org/t/p/w1280' + m.poster_path

    const overview = document.createElement('div')
    overview.classList.add('overview')
    overview.innerText = m.overview
    const card = document.createElement('div')
    card.classList.add('card')
    card.appendChild(img)
    card.appendChild(cardInfo)
    card.appendChild(overview)
    container.appendChild(card)
  })
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}

searchInput.addEventListener('change', () => {
  if (searchInput.value.length > 0) {
    let searchedMovies = []
    searchedMovies = movies.filter((m) =>
      m.title.toUpperCase().includes(searchInput.value.toUpperCase()),
    )
    removeAllChildNodes(container)
    displayMovies(searchedMovies)
  } else if (searchInput.value.length === 0) {
    removeAllChildNodes(container)
    displayMovies(movies)
  }
})
