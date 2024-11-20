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