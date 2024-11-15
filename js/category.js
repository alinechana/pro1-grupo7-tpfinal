let searchTags = document.querySelector(".searchTags")

let qs = location.search;
let qsObj = new URLSearchParams(qs)
let tag = qsObj.get("tag")
let URL = `https://dummyjson.com/recipes/tag/${tag}`

fetch(URL)
.then(function (response) {
    
    return response.json();
})
.then(function (data) {
    let agregarTags = ""
    let recipes = data.recipes

    for (let i = 0; i < recipes.length; i++) {
        agregarTags += 
        `<article>
            <img class = imgCat src= ${recipes[i].image} alt=''>
            <h2> ${recipes[i].name} </h2>
            <h3> Difficulty: ${recipes[i].difficulty} </h3>
            <p ><a href="./receta.html?id=${recipes[i].id}">Presione para más detalles</a></p>
        </article>
        `
    }
    searchTags.innerHTML += agregarTags
})
.catch(function (error) {
    return console.log(error);
    ;
})