let selectedNodes = document.querySelectorAll('.selected')
let notSelectedNodes = document.querySelectorAll('.not-selected')
let nextButton = document.querySelector('.next')
let prevButton = document.querySelector('.prev')

nextButton.addEventListener('click', () => {
    if (notSelectedNodes.length > 0) {
        notSelectedNodes[0].classList.remove('not-selected');
        notSelectedNodes[0].classList.add('selected');
        selectedNodes = document.querySelectorAll('.selected')
        notSelectedNodes = document.querySelectorAll('.not-selected')
        checkButtons();
    }
})

prevButton.addEventListener('click', () => {
    if (selectedNodes.length > 0) {
        selectedNodes[selectedNodes.length - 1].classList.remove('selected');
        selectedNodes[selectedNodes.length - 1].classList.add('not-selected');
        selectedNodes = document.querySelectorAll('.selected')
        notSelectedNodes = document.querySelectorAll('.not-selected')
        checkButtons();
    }
})

function checkButtons() {
    if (notSelectedNodes.length === 0) {
        nextButton.classList.remove('activated')
        nextButton.classList.add('disabled')
    } else {
        nextButton.classList.remove('disabled')
        nextButton.classList.add('activated')
    }
    if (selectedNodes.length > 1) {
        prevButton.classList.remove('disabled')
        prevButton.classList.add('activated')
    } else {
        prevButton.classList.remove('activated')
        prevButton.classList.add('disabled')
    }
}
