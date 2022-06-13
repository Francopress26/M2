const botonAmigos = document.querySelector('#boton');
const ulAmigos = document.querySelector('#lista')

function mostrarAmigos() {
     //Listener agregado al BOTON
        ulAmigos.innerHTML='' // Vacio la lista de amigos
        fetch('http://localhost:5000/amigos') //Get de fetch asume que es un get xq no tiene nada especificado
            .then(res => res.json())  //Promesaas para transformar de JSON a algo q js pueda manipular
            .then(amigos =>{
                for (let i = 0; i < amigos.length; i++) { // Recorro el array que me envio el get
                let li= document.createElement('li'); // Creo un elemento li para la lista
                    li.innerText=amigos[i].name //Le asigno el nombre q esta recorriendo el for
                    ulAmigos.append(li) // Lo agrego a la lista
                }
            })
    
}

botonAmigos.addEventListener('click',mostrarAmigos)

const inputAmigo = document.querySelector('#input')
const botonSearch= document.querySelector('#search')
const spanAmigo=document.querySelector('#amigo')

botonSearch.addEventListener('click',function(){ //Listener
    let idAmigo= inputAmigo.value // guardo el valor del input
    inputAmigo.value=''
    fetch(`http://localhost:5000/amigos/${idAmigo}`) //Get de fetch
        .then(res => res.json())  //Promesaas para transformar de JSON 
        .then(amigo =>{ // Me devuelve un objeto amigo
           spanAmigo.innerText=amigo.name //al innerText del span le asigno el nombre del amigo
    
        })
})

const inputDelete = document.querySelector('#inputDelete')
const botonDelete = document.querySelector('#delete')
const spanBorrar = document.querySelector('#success')

botonDelete.addEventListener('click',function(){ //Listener
    let idAmigo=inputDelete.value
    inputDelete.value=''
    fetch(`http://localhost:5000/amigos/${idAmigo}`,{
        method :'DELETE'
    }) //Get de fetch
        .then(res => res.json())  //Promesaas para transformar de JSON 
        .then(() =>{
            
           spanBorrar.innerText='Borrado con exito'
            mostrarAmigos()
        })
})