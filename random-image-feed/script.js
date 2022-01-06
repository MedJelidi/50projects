const container = document.querySelector('div')

function createImages(n) {
    for (let i = 0; i < n; i++) {
        const img = document.createElement('img')
        img.src = `https://picsum.photos/id/${Math.floor(Math.random() * (n + 200))}/300`
        container.append(img)
    }
}

createImages(15)