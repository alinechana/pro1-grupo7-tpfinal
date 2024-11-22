let login = document.querySelector(".login");
let email = document.querySelector(".email");
let contra = document.querySelector(".contra");

login.addEventListener("submit", function(e) {
    e.preventDefault()
    if (email.value == "") {
        alert("Por favor complete el campo email")
    }
    else if (contra.value == "") { 
        alert("Por favor complete el campo contraseña")
        
    } else {
        this.submit()
        
    }
    
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







