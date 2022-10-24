const form = document.querySelector('form')
const genraTion = document.querySelectorAll('.gen');
const pokeContainer = document.querySelector('#poke_container');
const searchInput = document.querySelector('.searchPoke')
const baseURL = 'https://pokeapi.co/api/v2/pokemon/';
const pokeNum = 500;

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

const getGen1 = () => {
    const searchGen1 = pokemons.filter((pokemon) => pokemon.id <=151);
        removePokemon()
        searchGen1.forEach((pokemon) =>createCard(pokemon))
    }
const getGen2 = () => {
    const searchGen2 = pokemons.filter((pokemon) => pokemon.id >=100 && pokemon.id <=151)
        removePokemon()
        searchGen2.forEach((pokemon) =>createCard(pokemon))
    }
const getGen3 = () => {
    const searchGen3 = pokemons.filter((pokemon) => pokemon.id >=135 && pokemon.id <= 251);
        removePokemon()
        searchGen3.forEach((pokemon) =>createCard(pokemon))
    }
const getGen4 = () => {
    const searchGen4 = pokemons.filter((pokemon) => pokemon.id >=107 && pokemon.id <=387);
        removePokemon()
        searchGen4.forEach((pokemon) =>createCard(pokemon))
    }
const getGen5 = () => {
    const searchGen5 = pokemons.filter((pokemon) => pokemon.id >=156 && pokemon.id <=493);
        removePokemon()
        searchGen5.forEach((pokemon) =>createCard(pokemon))
    }
const getGen6 = () => {
    const searchGen6 = pokemons.filter((pokemon) => pokemon.id >=72 && pokemon.id <= 649);
        removePokemon()
        searchGen6.forEach((pokemon) =>createCard(pokemon))
    }
const getGen7 = () => {
    const searchGen7 = pokemons.filter((pokemon) => pokemon.id >=88 && pokemon.id <= 649);
        removePokemon()
        searchGen7.forEach((pokemon) =>createCard(pokemon))
    }
const getGen8 = () => {
    const searchGen8 = pokemons.filter((pokemon) => pokemon.id >=96 && pokemon.id <= 809);
        removePokemon()
        searchGen8.forEach((pokemon) =>createCard(pokemon))
    }


const getAllPokemon = async (id) => {
    try{
        const response = await fetch(`${baseURL}${id}`);
        const pokemon = await response.json();
        pokemons = [...pokemons, pokemon];
        //localStorage.setItem('key', JSON.stringify(pokemons))

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

//const pokeLocal = JSON.parse(localStorage.getItem('key'))

genraTion.forEach((item) =>{
    if(item.textContent === 'Gen1' ) {
        item.addEventListener('click', getGen1);
    }else if (item.textContent === 'Gen2'){
        item.addEventListener('click', getGen2)
    }else if (item.textContent === 'Gen3'){
        item.addEventListener('click', getGen3)
    }else if (item.textContent === 'Gen4'){
        item.addEventListener('click', getGen4)
    }else if (item.textContent === 'Gen5'){
        item.addEventListener('click', getGen5)
    }else if (item.textContent === 'Gen6'){
        item.addEventListener('click', getGen6)
    }else if (item.textContent === 'Gen7'){
        item.addEventListener('click', getGen7)
    }else if (item.textContent === 'Gen8'){
        item.addEventListener('click', getGen7)
    }
})