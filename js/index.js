const URL = "https://dummyjson.com/recipes"

let rec = document.querySelector(".rec")
let cargarMas = document.querySelector(".cargarMas")

fetch(URL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data.recipes);

        let recetas = data.recipes
        let recipes = ""
        for (let i = 0; i < 10; i++) {
            recipes +=
            `<article class="artRec , elementosFlex">
                <img class="imagenRec" src= ${recetas[i].image} alt=''>
                <h2 class="recetasData"> ${recetas[i].name} </h2>
                <h3 class="recetasData"> Dificultad: ${recetas[i].difficulty} </h3>
                <p class="recetasData"><a href="./receta.html?id=${recetas[i].id}">Presione para más detalles</a></p>
            </article>
            `
        }
        rec.innerHTML = recipes
        let masRecetas = ""
cargarMas.addEventListener("click", function () {
    for (let a = 10; a < 20; a++) {
        masRecetas +=
        `<article class="artRec , elementosFlex">
            <img class="img" src= ${recetas[a].image} alt=''>
            <h2 class="recetasData" > ${recetas[a].name} </h2>
            <h3 class="recetasData"> Dificultad: ${recetas[a].difficulty} </h3>
            <p class="recetasData">  <a href="./receta.html">Presione para más detalles</a> </p>
        </article>
        `
    }
    rec.innerHTML += masRecetas
    })

})
    .catch(function (error) {
        return console.log(error);
        ;
    })

