let register = document.querySelector(".register");
let email = document.querySelector(".emailRegister");
let msjError = document.querySelector(".msjError");
let contra =document.querySelector(".contraRegister");


register.addEventListener("submit", function(e) {
    e.preventDefault()
    if (email.value == "") {
        msjError.innerText = "Por favor complete el campo";
        msjError.style.color = "red"
    
    }
    else if (contra.value == "") { 
        msjError.innerText = "Por favor complete el campo";
        msjError.style.color = "red"


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

