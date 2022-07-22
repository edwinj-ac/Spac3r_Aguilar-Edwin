const appPageTrig = document.getElementById("appMobilePage");
const webPageTrig = document.getElementById("appWebPage");
const arvrPageTrig = document.getElementById("appARVRPage");
const aiPageTrig = document.getElementById("appAIPage");
const gamesPageTrig = document.getElementById("appGamesPage");
const robPageTrig = document.getElementById("appRobPage");


appPageTrig.addEventListener("click", () => {
    window.open('../pages/proyectos_app.html', "_self");
}
);

webPageTrig.addEventListener("click", () => {
    window.open('../pages/proyectos_web.html', "_self");
}
);

arvrPageTrig.addEventListener("click", () => {
    window.open('../pages/proyectos_ArVr.html', "_self");
}
);

aiPageTrig.addEventListener("click", () => {
    window.open('../pages/proyectos_IA.html', "_self");
}
);

gamesPageTrig.addEventListener("click", () => {
    window.open('../pages/proyectos_games.html', "_self");
}
);

robPageTrig.addEventListener("click", () => {
    window.open('../pages/proyectos_robotic.html', "_self");
}
);

