
let carrito=[]
const carritoContenedor=document.querySelector('#carritoContenedor')

document.addEventListener('DOMContentLoaded', ()=>{
    carrito=JSON.parse(localStorage.getItem('carritoPokemon')) || []
    mostrarCarrito()
} )
const PokeCard= (pokemons) =>{
   return`<div class="card" style="width: 18rem;">
<img class="card-img-top mt-2" src="${pokemons.img}" alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">${pokemons.nombre}</h5>
  <p class="card-text">${pokemons.Descripcion}</p>
  <button onclick="pickPokemon(${pokemons.id})" class="btn btn-primary">pick</button>
</div>
</div>
`}

const PokeCardError= ()=>{
    return `<div class="card-error">
    <h2>Error 404</h2>
    <h3>No pudimos cargar los pokemons!!!!</h3>
</div>`
}

function pickPokemon(id){
    const item= pokemons.find(pokemons=> pokemons.id === id)
    carrito.push(item)
    mostrarCarrito()
}

const mostrarCarrito=()=>{
    const modalBody=document.querySelector(".modal .modal-body")
    

    carrito.forEach((pokemons)=>{
    const {id, nombre, tipo, img} = pokemons
    modalBody.innerHTML =
    `<div class="modal-contenedor">
    <div>
    <img class="img-fluid img-carrito" src="${img}"/>
    </div>
    <div>
    <p class="text-uppercase">Pokemon:${nombre}</p>
    <p>Tipo:${tipo}</p>

    <button onclick="eliminarPokemon([${id}])" class="btn btn-danger"> Elegir otro pokemon</button>

    </div>`
    })
    carritoContenedor.textContent= carrito.length
    guardarStorage()
}

function eliminarPokemon(id){
    const pokemonId= id[0]
    carrito= carrito.filter((pokemons)=> pokemons.id !== pokemonId)
    mostrarCarrito()
}

function guardarStorage(){
    localStorage.setItem("carritoPokemon", JSON.stringify(carrito))
}

let start= document.getElementById("start")
    start.addEventListener("click", ()=>{
        swal("Tu nombre de entrenador:", {
            content: "input", id:"entrenador"})
                .then((entrenador) => {
                    swal(`Bienvenido: ${entrenador} !!!`);
                guardarEntrenador()});
                })
function guardarEntrenador(){
    localStorage.setItem("entrenador", Json.stringify( nick ))
}