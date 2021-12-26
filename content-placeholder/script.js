const loadings = document.querySelectorAll('.loading-bg')
const cardImage = document.querySelector('.card-image')
const cardTitle = document.querySelector('.card-title')
const authorName = document.querySelector('.author-name')
const pubDate = document.querySelector('.pub-date')
const authorImg = document.querySelector('.author-img')
const cardDesc = document.querySelector('.card-desc')

setTimeout(() => {
  loadings.forEach((l) => {
    l.classList.remove('loading-bg')
    l.classList.remove('skel-card-desc')
  })
  cardImage.style.backgroundImage = `url('https://picsum.photos/320/400')`
  cardTitle.innerText = 'Lorem ipsum dolor sit amet'
  authorName.innerText = 'John Doe'
  pubDate.innerText = 'Oct 08, 2020'
  cardDesc.innerText =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'
  authorImg.style.backgroundImage = `url('https://picsum.photos/40/40')`
}, 3000)
