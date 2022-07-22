let myForm = document.getElementById("form-contact");
myForm.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    let formulario = e.target
    console.log(formulario.children[0].value);  
    console.log("Valores de formulario ingresados");  
}

