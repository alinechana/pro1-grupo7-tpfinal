let buscador = document.querySelector("#buscador")

let btnNav = document.querySelector(".buscadorNav");
btnNav.addEventListener("submit", function (e) {
    e.preventDefault()
    if (buscador.value == " ") {
        alert("El campo no puede estar vacío");
    }else if (buscador.value.length < 3) {
        alert("Debe ingresar una palabra mayor a 3 caracteres");
    }else {
        this.submit();
    }
    
})