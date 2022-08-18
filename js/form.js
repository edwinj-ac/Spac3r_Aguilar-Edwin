let miForm  = document.getElementById("form-contact");
miForm.addEventListener("submit",  evaluateForm);

function evaluateForm(e){
    var params = {
        from_name: document.getElementById("name_user").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value,
        company: document.getElementById("company").value,
        tel_number: document.getElementById("tel_number").value,
    };
    e.preventDefault();
    //alert("Datos Enviados");    
    Swal.fire({
        title: "¡Gracias!",
        text: "Pronto te contactaremos",
        icon: "success",
        confirmButtonText: "Continuar",
    });
    
    emailjs.init('MzSoxfF5IP6LpyQOm');
    emailjs.send("service_ctd0m1e", "template_3krgt6i", params).then(()=>{
        console.log("envio exitoso");
    });
    

}
