const poke_container = document.getElementById('poke-container')

// Número total de Pokemones que se mostrarán
const pokemon_count = 150

// Colores según el tipo de Pokemon
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

const main_types = Object.keys(colors)

// Función para obtener los datos de los Pokémon de la API
const fetchPokemons = async () => {
    for (let i = 1; i <= pokemon_count; i++) {

        // Llamamos a la función getPokemon para obtener los datos de un Pokémon específico
        await getPokemon(i)
    }
}

// Función para obtener los datos de un Pokémon específico de la API
const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard(data)
}

// Función para crear una tarjeta de Pokémon y mostrarla en el contenedor
const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    const id = pokemon.id.toString().padStart(3, '0')

    const poke_types = pokemon.types.map(type => type.type.name)
    const type = main_types.find(type => poke_types.indexOf(type) > -1)
    const color = colors[type]

    // Establecemos el color de fondo del elemento Pokémon según su tipo
    pokemonEl.style.backgroundColor = color

    // Creamos el HTML interno de la tarjeta de Pokémon
    const pokemonInnerHTML = `
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"" alt="${name}">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span> </small>
    </div>
    `

    // Insertamos el HTML interno en el elemento Pokémon
    pokemonEl.innerHTML = pokemonInnerHTML

    // Agregamos el elemento Pokémon al contenedor
    poke_container.appendChild(pokemonEl)
}

// Se llama a la función para obtener los datos de los Pokémon
fetchPokemons()