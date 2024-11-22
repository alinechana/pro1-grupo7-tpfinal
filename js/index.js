let skip = 0;
let rec = document.querySelector(".rec");
let cargarMas = document.querySelector(".cargarMas");

function fetchRecetas(skip){
    let url = `https://dummyjson.com/recipes?limit=10&skip=${skip}`;
    
    fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let recetas = data.recipes
        let recipes = ""
        for (let i = 0; i < recetas.length; i++) {
            recipes +=
            `<article class="artRec , elementosFlex">
                <img class="imagenRec" src= ${recetas[i].image} alt=''>
                <h2 class="recetasData"> ${recetas[i].name} </h2>
                <h4 class="recetasData"> Dificultad: ${recetas[i].difficulty} </h4>
                <p class="recetasData"><a href="./receta.html?id=${recetas[i].id}">Presione para más detalles</a></p>
            </article>
            `
        }
        rec.innerHTML += recipes
    })
    .catch(function (error) {
        return console.log(error);
        ;
    })
}

fetchRecetas(skip);

cargarMas.addEventListener("click", function () {
    skip += 10;
    fetchRecetas(skip)
})

let buscadorNav = document.querySelector(".buscadorNav"); 

buscadorNav.addEventListener("submit", function(event){
    event.preventDefault()

})

let buscador = document.querySelector("#buscador");

buscador.addEventListener("keypress", function(event){

    //console.log(event);

    if (event.code == "Enter") {


        if (this.value.length < 3) {
            alert("Debe ingresar una palabra mayor a 3 caracteres");

        }else if (this.value == "") {
            alert("El campo no puede estar vacío");

        }else{
            buscadorNav.submit();
        }
        
    } 
    

})

