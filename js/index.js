const appPageTrig = document.getElementById("appMobilePage");
const webPageTrig = document.getElementById("appWebPage");
const arvrPageTrig = document.getElementById("appARVRPage");
const aiPageTrig = document.getElementById("appAIPage");
const gamesPageTrig = document.getElementById("appGamesPage");
const robPageTrig = document.getElementById("appRobPage");

//let flagSection;

appPageTrig.addEventListener("click", () => {
    window.open('../pages/proyectos_web.html', "_self");
    localStorage.setItem("seccion", "app");
    //flagSection = localStorage.getItem("seccion");
    console.log(flagSection);
    //Choose(flagSection);

    //console.log(flagSection);
    
}
);

webPageTrig.addEventListener("click", () => {
    window.open('../pages/proyectos_web.html', "_self");
    localStorage.setItem("seccion", "web");
    //flagSection = localStorage.getItem("seccion")

    console.log(flagSection);
}
);

arvrPageTrig.addEventListener("click", () => {
    window.open('../pages/proyectos_web.html', "_self");
    localStorage.setItem('seccion', "arvr");
    //flagSection = localStorage.getItem('seccion');
}
);

aiPageTrig.addEventListener("click", () => {
    window.open('../pages/proyectos_web.html', "_self");
    localStorage.setItem('seccion', "ia");
    //flagSection = localStorage.getItem('seccion');
}
);

gamesPageTrig.addEventListener("click", () => {
    window.open('../pages/proyectos_web.html', "_self");
    localStorage.setItem('seccion', "game");
    //flagSection = localStorage.getItem('seccion');
}
);

robPageTrig.addEventListener("click", () => {
    window.open('../pages/proyectos_web.html', "_self");
    localStorage.setItem('seccion', "robotic");
    //flagSection = localStorage.getItem('seccion');
   
}
);

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
