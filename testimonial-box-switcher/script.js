const opinions = [{
        opinion: `I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time.`,
        client: {
            name: 'Miyah Myles',
            profession: 'Marketing'
        }
    },
    {
        opinion: 'This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!',
        client: {
            name: 'June Cha',
            profession: 'Software Engineer'
        }
    },
    {
        opinion: `I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!`,
        client: {
            name: 'Jonathan Nunfiez',
            profession: 'Graphic Designer'
        }
    },
    {
        opinion: `This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him.`,
        client: {
            name: 'ida Niskanen',
            profession: 'Data Entry'
        }
    },
    {
        opinion: 'This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!',
        client: {
            name: 'Sasha Ho',
            profession: 'Accountant'
        }
    }
]
let activeCard = 0

function createCard(opIndex) {
    let card = document.querySelector('.card')
    if (card) card.remove()
    const leftQuote = document.createElement('i')
    leftQuote.classList.add(...['fas', 'fa-lg', 'fa-quote-left'])
    const clientName = document.createElement('h4')
    clientName.innerText = opinions[opIndex].client.name
    const clientProfession = document.createElement('h4')
    clientProfession.innerText = opinions[opIndex].client.profession
    const clientInfo = document.createElement('div')
    clientInfo.classList.add('info')
    clientInfo.append(clientName)
    clientInfo.append(clientProfession)
    const clientPicture = document.createElement('div')
    clientPicture.classList.add('picture')
    const clientProfile = document.createElement('div')
    clientProfile.classList.add('profile')
    clientProfile.append(clientPicture)
    clientProfile.append(clientInfo)
    const opinion = document.createElement('p')
    opinion.innerText = opinions[opIndex].opinion
    const progressBar = document.createElement('div')
    progressBar.classList.add('progress-bar')
    const content = document.createElement('div')
    content.classList.add('content')
    content.append(progressBar)
    content.append(opinion)
    content.append(clientProfile)
    const rightQuote = document.createElement('i')
    rightQuote.classList.add(...['fas', 'fa-lg', 'fa-quote-right'])
    card = document.createElement('div')
    card.classList.add('card')
    card.append(rightQuote)
    card.append(content)
    card.append(leftQuote)
    document.body.append(card)
}

createCard(activeCard)


setInterval(() => {
    activeCard = activeCard >= opinions.length - 1 ? 0 : activeCard + 1
    createCard(activeCard)
}, 10000)