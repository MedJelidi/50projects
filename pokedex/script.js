const container = document.querySelector('.container')
const pokemonNum = 150
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}


async function getPokemon(id) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    createPokemon(await res.json())
}

function createPokemon(pokemon) {
    const type = document.createElement('h5')
    const poke_types = pokemon.types.map(type => type.type.name)
    const pokeType = Object.keys(colors).find(type => poke_types.indexOf(type) > -1)
    const color = colors[pokeType]
    type.innerText = pokeType
    const name = document.createElement('h3')
    name.innerText = pokemon.name
    const pokeId = document.createElement('div')
    pokeId.classList.add('poke-id')
    pokeId.innerText = pokemon.id
    const pokeImage = document.createElement('div')
    pokeImage.classList.add('poke-image')
    const card = document.createElement('div')
    card.classList.add('card')
    card.style.backgroundColor = color
    card.append(pokeImage)
    card.append(pokeId)
    card.append(name)
    card.append(type)
    container.append(card)
}

function fetchPokemons() {
    for (let i = 1; i < pokemonNum; i++) {
        getPokemon(i)
    }
}

fetchPokemons()