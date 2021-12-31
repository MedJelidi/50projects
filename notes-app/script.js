const addButton = document.querySelector('.add-button')
const container = document.querySelector('.container')
let notes

addButton.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const editIcon = document.createElement('i')
    editIcon.classList.add('far')
    editIcon.classList.add('fa-edit')
    editIcon.addEventListener('click', () => {
        const ro = editIcon.parentElement.nextSibling.readOnly
        editIcon.parentElement.nextSibling.readOnly = !ro
    })
    const trashIcon = document.createElement('i')
    trashIcon.classList.add('far')
    trashIcon.classList.add('fa-trash-alt')
    trashIcon.addEventListener('click', () => {
        trashIcon.parentElement.parentElement.remove()
    })
    const noteHeader = document.createElement('div')
    noteHeader.classList.add('note-header')
    noteHeader.append(editIcon)
    noteHeader.append(trashIcon)
    const note = document.createElement('div')
    note.classList.add('note')
    note.append(noteHeader)
    note.append(textarea)
    container.append(note)
    notes = document.querySelectorAll('.note')
})