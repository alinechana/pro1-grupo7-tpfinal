let login = document.querySelector(".login");

login.addEventListener("focus", function() {
    if (this.value == " ") {
        alert("Por favor complete el campo email")
    }
    if (this.value == ""){
        alert("Por favor complete el campo contraseña");
    } 
}) 





