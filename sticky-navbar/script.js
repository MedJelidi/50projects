const header = document.querySelector('header')

document.addEventListener('scroll', () => {
  const reachedPoint = window.scrollY > header.offsetHeight
  header.classList.remove('header-bottom')
  if (reachedPoint) header.classList.add('header-bottom')
})
