const header = document.querySelector('header')

document.addEventListener('scroll', () => {
  const reachedMiddle =
    window.innerHeight - window.scrollY < window.innerHeight / 2
  header.classList.remove('header-bottom')
  if (reachedMiddle) header.classList.add('header-bottom')
})
