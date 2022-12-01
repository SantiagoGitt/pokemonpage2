let pokemon= []
let URL="./pokemon.json"
const cargarPokemons=async(id)=>{
let pokemons=""
try
{const responce= await fetch(URL)
console.table(responce)}
catch(error)
{}
finally
{}
}
let carrito=[]

const ContenedorPokemons= document.getElementById('#Contenedor')
const carritoContenedor=document.querySelector('#carritoContenedor')

document.addEventListener('DOMContentLoaded', ()=>{
    carrito=JSON.parse(localStorage.getItem('carritoPokemon')) || []
    mostrarCarrito()
} )
pokemons.forEach((pokemon)=>{
   const {id, nombre, tipo, Descripcion, img} = pokemon
   Contenedor.innerHTML += 
`
<div class="card" style="width: 18rem;">
<img class="card-img-top mt-2" src="${img}" alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">${nombre}</h5>
  <p class="card-text">${Descripcion}</p>
  <button onclick="pickPokemon(${id})" class="btn btn-primary">pick</button>
</div>
</div>
`
                                
})

function pickPokemon(id){
    const item= pokemons.find((pokemon)=> pokemon.id === id)
    carrito.push(item)
    mostrarCarrito()
}

const mostrarCarrito=()=>{
    const modalBody=document.querySelector(".modal .modal-body")
    modalBody.innerHTML= ''

    carrito.forEach((pokemon)=>{
    const {id, nombre, tipo, img, Descripcion} = pokemon
    modalBody.innerHTML =
    `<div class="modal-contenedor">
    <div>
    <p>entrenador=${Entrenador}</p>
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
    const pokemonId= id
    carrito= carrito.filter((pokemon)=> pokemon.id !== pokemonId)
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
                    swal(`Bienvenido: ${entrenador} !!!`);});})



