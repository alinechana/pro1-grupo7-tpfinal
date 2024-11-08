let email = document.querySelector(".email");

let contra = document.querySelector("contra");

let login = document.querySelector(".login");

login.addEventListener("submit", function() {
    if (email.length() == "") {
        alert("Por favor complete el campo email")
    }
    if (contra.length() == ""){
        alert("Por favor complete el campo contraseña");

    } 
}) 





