let searchResults = document.querySelector(".search-results")

let qs = location.search;
let qsObj = new URLSearchParams(qs)
let value = qsObj.get("buscador")

const URL = `https://dummyjson.com/recipes/search?buscador=${value}`

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
            <img src= ${recipes[i].image} alt=''>
            <p> Receta: ${recipes[i].name}</p>
            <p> Link: ${recipes[i].instructions} </p>
        </article>`
        
    }
    searchResults.innerHTML = recetas
})
.catch( function (error){
    return console.log(error);
})





