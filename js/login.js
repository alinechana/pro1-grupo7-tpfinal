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






