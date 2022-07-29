const infojson = [
    {
        id: "Proyectos de apps móviles",
        description: "Proyectos multiplataforma (Android/iOS) para dispositivos moviles basados en Unity.",
        card1: "App de aviso climatico, envio de reportes de texto y fotos a servidor AWS.",
        card2: "App de seguridad privada en la cual los usuarios ingresan por un login y envian reportes detalaldos de diversas situaciones que se les presenta. Cuenta con us sitema de alarma SOS, ubicaciones de oficinas de seguridad mas cercanas y seguimiento de ordenes de denuncia",
        card3: "App de relajacion mediante juegos, audios y videos. Calendariza tus estados de animos y como apoyo para profesionales de la salud mental"

    },
    {
        id: "Proyectos de web apps",
        description: "Proyectos de desarrollo web basados en React js, mogo db, mobile first. Personalizados a los requerimientos de cada cliente.",
        card1: "Administrador web de usuario, contenido multimedia e informacion personal y usarse de API para sitios dinamicos.",
        card2: "Plataforma 3D virtual de posicionamiento de marca con video, imagenes y avatares 3D.",
        card3: "App web que estima las medidas de tu cuerpo mediante una fotografia, obteniendo estimaciones de brazos, pecho y tronco."
    },
    {
        id: "Proyectos de Realidad Virtual y Aumentada",
        description: "Desarrollos tecnologicos enfocados adapatar la realidad aumentada y virtual a diferentes sectores de la industria y comercial.",
        card1: "App de realidad aumentada para mostrar modelos de una marca de muebles.",
        card2: "Plataforma de realidad virtual multijugador para trabajo remoto.",
        card3: "App de soporte técnico a distancia mediante AR y comunicacion de voz."
    },
    {
        id: "Videojuegos",
        description: "Videojuegos 2D y 3D adaptados a las necesidades del cliente basdos en Unity.",
        card1: "Juego para dispositivos móviles con el sistema de juego del famoso juego 'Candy Crush' ",
        card2: "Juego de pelea en 3D orientado a juegos de criptomoneda",
        card3: "Juego 2D de plataformas y aventuras"
    },
    {
        id: "Proyectos Robóticos y electrónica",
        description: "Implementaciones de hardware para procesos automaticos, de comunicacion y sistemas de control",
        card1: "Sistema electronico con ESP32, comunicacion wifi, broker MQTT y conexion a web app",
        card2: "Brazo robotico capaz de manipular pequeños objetos con conexión de control intregrado",
        card3: "Robot movil autonomo capaz de moverse inalambricamente por medio de detección de nube de puntos"
    },
    {
        id: "Proyectos de Inteligencia Artificial y Machine Learning",
        description: "Proyectos de implementacion con inteligencia artificial para el tratamiento de datos y creación de soluciones.",
        card1: "Clasificacion de imagenes con reconocimiento facial para identificar si un persona usa cubrebocas.",
        card2: "",
        card3: ""
    }
];
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

guardarLocal("infoJSON", JSON.stringify(infojson));

let title = document.getElementById("title-projects");
let subtitle = document.getElementById("description-projects");
let project1 = document.getElementById("project-1");
let project2 = document.getElementById("project-2");
let project3 = document.getElementById("project-3");

const enJSON = localStorage.getItem("infoJSON");
const infoJSON = JSON.parse(enJSON);
let typeTech = localStorage.getItem("seccion");

Choose(typeTech);

function Choose(type){
    switch(type){
        case "app":
            title.innerHTML = infoJSON[0].id;
            subtitle.innerHTML = infoJSON[0].description;
            project1.innerHTML = infoJSON[0].card1;
            project2.innerHTML = infoJSON[0].card2;
            project3.innerHTML = infoJSON[0].card3;
            break;

        case "web":
            title.innerHTML = infoJSON[1].id;
            subtitle.innerHTML = infoJSON[1].description;
            project1.innerHTML = infoJSON[1].card1;
            project2.innerHTML = infoJSON[1].card2;
            project3.innerHTML = infoJSON[1].card3;
            break;
        case "arvr":
            subtitle.innerHTML = infoJSON[2].description;
            title.innerHTML = infoJSON[2].id;
            project2.innerHTML = infoJSON[2].card2;
            project1.innerHTML = infoJSON[2].card1;
            project3.innerHTML = infoJSON[2].card3;
            break;
        case "game":
                subtitle.innerHTML = infoJSON[3].description;
                title.innerHTML = infoJSON[3].id;
                project2.innerHTML = infoJSON[3].card2;
                project3.innerHTML = infoJSON[3].card3;
                project1.innerHTML = infoJSON[3].card1;
            break;
        case "robotic":
            subtitle.innerHTML = infoJSON[4].description;
            title.innerHTML = infoJSON[4].id;
            project2.innerHTML = infoJSON[4].card2;
            project1.innerHTML = infoJSON[4].card1;
            project3.innerHTML = infoJSON[4].card3;
            break;
        
        case "ia":
            subtitle.innerHTML = infoJSON[5].description;
            title.innerHTML = infoJSON[5].id;
            project2.innerHTML = infoJSON[5].card2;
            project3.innerHTML = infoJSON[5].card3;
            project1.innerHTML = infoJSON[5].card1;
        break;

    }
}

//console.log(guardarLocal("infoJSON", JSON.stringify(infojson)));
