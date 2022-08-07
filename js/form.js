let miForm  = document.getElementById("form-contact");
miForm.addEventListener("submit",  evaluateForm);

function evaluateForm(e){
    e.preventDefault();
    //alert("Datos Enviados");    
    Swal.fire({
        title: "¡Gracias!",
        text: "Pronto te contactaremos",
        icon: "success",
        confirmButtonText: "Continuar",
    });
}
