const questions = [{
        question: 'Which language runs in a web browser?',
        options: [
            'Java',
            'C',
            'Python',
            'JavaScript'
        ],
        correctAnswer: '3'
    },
    {
        question: 'What does CSS stand for?',
        options: [
            'Central Style Sheets',
            'Cascading Style Sheets',
            'Cascading Simple Sheets',
            'Cars SUVs Sailboats'
        ],
        correctAnswer: '1'
    },
    {
        question: 'What does HTML stand for?',
        options: [
            'Hypertext Markup Language',
            'Hypertext Markdown Language',
            'Hyperloop Machine Language',
            'Helicopters Terminals Motorboats Lamborginis'
        ],
        correctAnswer: '0'
    },
    {
        question: 'What year was JavaScript launched?',
        options: [
            '1996',
            '1995',
            '1994',
            'none of the above'
        ],
        correctAnswer: '3'
    }
]
const answers = []
let score = 0

let currentQuestion = 0

function createCard(j) {
    const prevCard = document.querySelector('.card')
    if (prevCard) prevCard.remove()
    const button = document.createElement('button')
    button.innerText = 'Submit'
    const optionsContainer = document.createElement('div')
    for (let i = 0; i < questions[j].options.length; i++) {
        const label = document.createElement('label')
        label.for = `radio${i}`
        label.innerText = questions[j].options[i]
        const input = document.createElement('input')
        input.type = 'radio'
        input.name = 'quiz'
        input.id = `radio${i}`
        input.value = i
        const option = document.createElement('div')
        option.append(input)
        option.append(label)
        optionsContainer.append(option)
    }
    const question = document.createElement('h1')
    question.innerText = questions[j].question
    const card = document.createElement('div')
    card.classList.add('card')
    card.append(question)
    card.append(optionsContainer)
    card.append(button)
    document.body.append(card)
    button.addEventListener('click', goToNext)
}

createCard(currentQuestion)

function goToNext() {
    const radios = document.querySelectorAll('input')
    let value
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            value = radios[i].value;
            answers.push(value)
        }
    }
    if (currentQuestion < questions.length - 1 && value !== undefined) {
        createCard(++currentQuestion)
    } else if (currentQuestion >= questions.length - 1) {
        answers.forEach((a, k) => {
            if (a === questions[k].correctAnswer) score++
        })
        document.querySelector('.card').remove()
        const result = document.createElement('h1')
        result.innerText = `You answered ${score}/${questions.length} questions correctly`
        const button = document.createElement('button')
        button.innerText = 'Reload'
        button.addEventListener('click', () => window.location.reload())
        const card = document.createElement('card')
        card.classList.add('card')
        card.append(result)
        card.append(button)
        document.body.append(card)
    }
}