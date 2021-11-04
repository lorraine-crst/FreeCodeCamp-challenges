document.getElementById("enviar").addEventListener("click", ValidaFormulario)

function ValidaFormulario(){
    if (document.getElementById("name").value !="" &&
        document.getElementById("email").value !="" && 
        document.getElementById("telefone").value != ""){
            alert("Prontinho! você receberá as novidades por e-mail.")
    }
     else{
         alert("Por favor, preencha os campos de nome e e-mail")
     }
}