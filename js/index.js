const URL = "https://dummyjson.com/recipes"

let rec = document.querySelector(".rec")
let formCargar = document.querySelector(".formCargar")
let cargarMas = document.querySelector(".cargarMas")

fetch(URL)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    let recetas = data.recipes
    let recipes = ""
    for (let i = 0; i < 10; i++) {
        recipes += 
        `<article class="artRec , elementosFlex">
            <img src= ${recetas[i].image} alt=''>
            <h2> ${recetas[i].name} </h2>
            <h4> Dificultad: ${recetas[i].difficulty} </h4>
            <p><a href="./receta.html">Presione para más detalles</a> </p>
        </article>
        `
    }
    rec.innerHTML = recipes

    let masRecetas = ""
    cargarMas.addEventListener("click", function () {
        for (let a = 10; a < 20; a++) {
            masRecetas +=
        `<article class="artFormCargar , elementosFlex">
            <img class="img" src= ${recetas[a].image} alt=''>
            <h2> ${recetas[a].name} </h2>
            <h4> Dificultad: ${recetas[a].difficulty} </h4>
            <p>  <a href="./receta.html">Presione para más detalles</a> </p>
        </article>
        ` 
        }
        formCargar.innerHTML = masRecetas
    })
})
.catch(function (error) {
    return console.log(error);
    ;
})