const form = document.querySelector('form')
const genraTion = document.querySelectorAll('.gen');
const pokeContainer = document.querySelector('#poke_container');
const searchInput = document.querySelector('#searchPoke')
const baseURL = 'https://pokeapi.co/api/v2/pokemon/';
const pokeNum = 10;

let pokemons = [];

const fetchPokemons = async () => {
    for (let index =1; index <= pokeNum; index++ ){
        await getAllPokemon(index);
    }
    pokemons.forEach((pokemon) => createCard(pokemon));
};

const getPokemon = async (id) => {
    const searchPokemons = pokemons.filter((poke) => poke.name === id);
    searchPokemons.forEach((pokemon) => createCard(pokemon));

};

const getAllPokemon = async (id) => {
    const response = await fetch(`${baseURL}${id}`);
    const pokemon = await response.json();
    pokemons = [...pokemons.pokemon]
};
fetchPokemons

const createCard = () => {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');
    const pokeTypes = pokemon.types.map((el) => el.type.name).slice(0,1);
    const pokeName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1); //
    const pokeStat = pokemon.stats.map((el) => el.stat.name);
    const stats = pokeStat.slice(0, 3);
    const baseValue = pokemon.stats.map((el) => el.base_stat);
    const baseStat = baseValue.slice(0, 3);
    const stat = stats.map((stat) => {
        return `<li class='names'>${stat}</li> `;
    }).join('');
    const base = baseStat.map((base) => {
        return `<li class='base'>${base}</li>`;
    }).join('');
    const pokerInnerHTMl = `<div class="img-container">
    <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png"
    alt="${pokeName}/>
    </div>
    <div class="info">
    <span class="number">#${pokemon.id.toString().padStart(3, "0")}</span>
    <h3 class="name">${pokeName}</h3>
    <small class="type"><span>${pokeTypes}</span></small>
    </div>
    <div class="stats">
    <h2>Stats</h2>
    <div class="flex">
    <ul>${stat}</ul>
    <ul>${base}</ul>
    </div>
    </div>`;
    pokemonEl.innerHTML = pokerInnerHTMl;
    pokeContainer.appendChild(pokemonEl);
}
form.addEventListener('submit', e => {
    e.preventDefault();
    const searchItem = searchInput.value;
    if(searchTerm) {
        getPokemon(searchTerm);
        searchInput.value = '';
    } else if (searchTerm === '') {
        pokemons = [];
        fetchPokemons();
    }

});
console.log(getAllPokemon())
