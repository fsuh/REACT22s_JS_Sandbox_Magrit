const form = document.querySelector('form')
const genraTion = document.querySelectorAll('.gen');
const pokeContainer = document.querySelector('#poke_container');
const searchInput = document.querySelector('.searchPoke')
const baseURL = 'https://pokeapi.co/api/v2/pokemon/';
const pokeNum = 10;

let pokemons = [];

const fetchPokemons = async () => {
    try{
        for (let i =1; i <= pokeNum; i++ ){
            await getAllPokemon(i);
        }
    } catch(error) {
        console.error(error)

    }
    pokemons.forEach((pokemon) => createCard(pokemon));
};

const removePokemon = () => {
    const pokemonEls = document.querySelectorAll('.card');
    let removablePokemons = [];
    for(let i = 0; i <pokemonEls.length; i++){
        const pokemonEl = pokemonEls [i];
        removablePokemons =[...removablePokemons, pokemonEl]
    }
    removablePokemons.forEach((remPoke) => remPoke.remove());

};

const getPokemon = async (id) => {
    const searchPokemons = pokemons.filter((pokemon) => pokemon.name===id);
    removePokemon();
    searchPokemons.forEach((pokemon) => createCard(pokemon));

};

const getAllPokemon = async (id) => {
    try{
        const response = await fetch(`${baseURL}${id}`);
        const pokemon = await response.json();
        pokemons = [...pokemons, pokemon];
    } catch(err){
        console.error(err)
    }
};
fetchPokemons();

const createCard = (pokemon) => {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('card');
    const pokeTypes = pokemon.types.map((el) => el.type.name).slice(0,1);
    const pokeName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const pokerInnerHTMl = 
    `<div class="imgbody">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png"
        alt="${pokeName}"/></div>
    <div class="info">
        <span class="pokeID">#ID${pokemon.id.toString().padStart(3, "0")}</span>
        <h3 class="pokeName">Name: ${pokeName}</h3>
        <small class="pokeType"><span>Type: ${pokeTypes}</span></small>
    </div>`;

    pokemonEl.innerHTML = pokerInnerHTMl;
    pokeContainer.appendChild(pokemonEl);
}
form.addEventListener('submit', e => {
    e.preventDefault();
    const searchTerm = searchInput.value;
    if(searchTerm) {
        getPokemon(searchTerm);
        searchInput.value ="";
    } else if (searchTerm === '') {
        pokemons = [];
        removePokemon();
        fetchPokemons();
    }

});


const getGen = () => {
    const searchGen = pokemons.filter((pokemon) =>{
        if(pokemon.name >= 151){
            removePokemon();
            searchGen.forEach((pokemon) =>createCard(pokemon))
        }
    })

}