const genraTion = document.querySelectorAll('.gen');
const pokeDisplay = document.querySelector('#pokeWrap');
let getPokeData = [];
/*const fetchPokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0').then((response) => response.json()).then((data) => {
    getPokeData = data.results;
    console.log(pokeData);
    pokeCards();
  });

}
const pokeCards = () => {
    pokeDisplay.innerHTML= getPokeData.map((pokemon) => {
        return `<div class="card"> 
        <img class="card-image" src="https://images.unsplash.com/photo-1640271443625-3276ed8f62b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"/>
        <p class="card-name">${pokemon.name}</p>
        <p class="card-subtitle"></p> 
    </div>`
        
    }).join(",")
}*/

//

fetchPokemon()