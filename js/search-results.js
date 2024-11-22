let searchResults = document.querySelector(".searchResults")

let qs = location.search;
let qsObj = new URLSearchParams(qs)
let value = qsObj.get("buscador")
let tituloResults = document.querySelector(".tituloResults")

const URL = `https://dummyjson.com/recipes/search?q=${value}`
let buscador = document.querySelector(".buscador")

fetch(URL)
.then(function (response) {
    return response.json();
    
})
.then(function (data) {
    let recetas = " "
    let resultados = data.recipes
    if (resultados && resultados.length > 0) {
        tituloResults.innerText = `Resultados de busqueda para: ${value}`
        for (let i = 0; i < resultados.length; i++) {
            recetas += 
            `<article class="articleSearch">
                <img class="imgSearch" src= ${resultados[i].image} alt=''>
                <p class="parrafoSearch"> Receta: ${resultados[i].name}</p>
                <p class="recetasData"><a href="./receta.html?id=${resultados[i].id}">Presione para más detalles</a></p>
            </article>`;
    }
    } else {
        tituloResults.innerText = `No se encontraron resultados para tu búsqueda: "${value}"`
    }  
    searchResults.innerHTML = recetas
})
.catch( function (error){
    return console.log(error);
})





