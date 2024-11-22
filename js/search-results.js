let searchResults = document.querySelector(".search-results")

let qs = location.search;
let qsObj = new URLSearchParams(qs)
let value = qsObj.get("buscador")

const URL = `https://dummyjson.com/recipes/search?q=${value}`

let buscador = document.querySelector(".buscador")

fetch(URL)
.then(function (response) {
    return response.json();
    
})
.then(function (data) {
    let recetas = " "
    let resultados = data.recipes
    for (let i = 0; i < resultados.length; i++) {
        recetas += 
        `<article>
            <img src= ${resultados[i].image} alt=''>
            <p> Receta: ${resultados[i].name}</p>
            <p class="recetasData"><a href="./receta.html?id=${resultados[i].id}">Presione para más detalles</a></p>
        </article>`
        
    }
    searchResults.innerHTML = recetas
})
.catch( function (error){
    return console.log(error);
})





