let detalleReceta = document.querySelector(".detalleReceta")
let h1 = document.querySelector("h1")
let instrucciones = document.querySelector(".instrucciones")
let tiempo = document.querySelector(".tiempo")
let imgReceta = document.querySelector(".imgReceta")
let tags = document.querySelector(".tags")

let qs = location.search;
let qsObj = new URLSearchParams(qs)
let id = qsObj.get("id")

const URL = `https://dummyjson.com/recipes/${id}`

fetch(URL)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    h1.innerText = `${data.name}`
    instrucciones.innerText = `Instrucciones: ${data.instructions}`
    tiempo.innerText = `Tiempo de cocción: ${data.cookTimeMinutes} minutos`
    imgReceta.src = `${data.image}`
    let categorias = ""
    for (let i = 0; i < data.tags.length; i++) {
        let tag = data.tags[i];
        categorias +=
        `<h3><a class="categoriasRecetas" href="./category.html?tag=${tag}">${tag}</a></h3>`
    }
    tags.innerHTML += categorias
})
.catch(function (error) {
    return console.log(error);
    
})

let buscador = document.querySelector("#buscador");

buscador.addEventListener("keypress", function(event){


    if (event.code == "Enter") {


        if (this.value == "") {
            alert("El campo no puede estar vacío");

        }else if (this.value.length < 3) {
            alert("Debe ingresar una palabra mayor a 3 caracteres");

        }else{
            buscadorNav.submit();
        }
        
    } 
    

})

let btnNav = document.querySelector(".btnNav");
btnNav.addEventListener("click", function () {

    if (buscador.value == "") {
        alert("El campo no puede estar vacío");

    }else if (buscador.value.length < 3) {
        alert("Debe ingresar una palabra mayor a 3 caracteres");

    }else{
        buscadorNav.submit();
    }
    
})

