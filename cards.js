let pokemons= []
const ContenedorPokemons= document.querySelector("div.contenedor")
let URL="./pokemon.json"

const cargarPokemons=async()=>{
let cardHTML=""
try{   
    const response= await fetch(URL)
        pokemons = await response.json()
        pokemons.forEach(pokemon => cardHTML += PokeCard(pokemon))
    }
catch(error)
{PokeCard= PokeCardError()}
finally
{ContenedorPokemons.innerHTML = cardHTML}
}

cargarPokemons()

