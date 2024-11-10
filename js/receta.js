let detalleReceta = document.querySelector(".detalleReceta")

let qs = location.search;
let qsObj = new URLSearchParams(qs)
let id = qsObj.get("id")

const URL = `https://dummyjson.com/recipes/${id}`

fetch(URL)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    let h1 = document.querySelector("h1")
    h1.innerText = `${data.name}`
    let instrucciones = document.querySelector(".instrucciones")
    instrucciones.innerText = `Instrucciones: ${data.instructions}`
    let tiempo = document.querySelector(".tiempo")
    tiempo.innerText = `Tiempo de cocción: ${data.cookTimeMinutes} minutos`
    let imgReceta = document.querySelector(".imgReceta")
    imgReceta.src = `${data.image}`
    let tags = document.querySelector(".tags")
    tags.innerText = `Categorías: ${data.tags}`
})
.catch(function (error) {
    return console.log(error);
    
})