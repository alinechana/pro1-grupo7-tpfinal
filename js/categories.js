let qs = location.search;
let qsObj = new URLSearchParams(qs)
let tag = qsObj.get("tag")

let todasCategorias = document.querySelector(".todasCategorias")
let url = 'https://dummyjson.com/recipes/tags';
console.log(url);

fetch(url)
.then(function (response) {
    return response.json()
})
.then(function (data) {
    let listaTags = ""
    for (let i = 0; i < data.length; i++) {
        let tag = data[i]
        listaTags +=
        `<h3 class="textoCategory"><a class="category" href="./category.html?tag=${tag}">${tag}</a></h3>`
    }
    todasCategorias.innerHTML = listaTags

})
.catch(function (erorr) {
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

