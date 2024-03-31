// Declaración de variables globales y arrays

var pregunta = document.getElementById("pregunta");
var contador = document.getElementById("contador");
var aciertos = 0;

var respuestasTest = [
        document.getElementById("a")
    ,
        document.getElementById("b")
    ,
        document.getElementById("c")
    ,
        document.getElementById("d")
];

let arrayPreguntas = [
    {
        pregunta: "¿Cuál es el elemento químico más abundante en la corteza terrestre?",
        respuestas: [
            "Hierro",
            "Carbono",
            "Calcio",
            "Oxígeno"
        ],
        respuestaTrue: "Oxígeno"        
    },
    {
        pregunta: "¿Quién desarrolló la teoría de la relatividad?",
        respuestas: [
            "Isaac Newton",
            "Galileo Galilei",
            "Marie Curie",
            "Albert Einstein"
        ],
        respuestaTrue: "Albert Einstein"
    },
    {
        pregunta: "¿Cuál es la velocidad de la luz en el vacío?",
        respuestas: [
            "150,000 km/s",
            "500,000 km/s",
            "200,000 km/s",
            "300,000 km/s"
        ],
        respuestaTrue: "300,000 km/s"
    },
    {
        pregunta: "¿Cuál es la unidad básica de la materia?",
        respuestas: [
            "Molécula",
            "Célula",
            "Electrón",
            "Átomo"
        ],
        respuestaTrue: "Átomo"
    },
    {
        pregunta: "¿Qué científico propuso la teoría heliocéntrica del sistema solar?",
        respuestas: [
            "Galileo Galilei",
            "Johannes Kepler",
            "Tycho Brahe",
            "Nicolaus Copérnico"
        ],
        respuestaTrue: "Nicolaus Copérnico"
    },
    {
        pregunta: "¿Cuál es el hueso más largo del cuerpo humano?",
        respuestas: [
            "Radio",
            "Tibia",
            "Húmero",
            "Fémur",
        ],
        respuestaTrue: "Fémur"
    },
    {
        pregunta: "¿Qué científico descubrió la penicilina?",
        respuestas: [
            "Louis Pasteur",
            "Marie Curie",
            "Gregor Mendel",
            "Alexander Fleming"
        ],
        respuestaTrue: "Alexander Fleming"
    },
    {
        pregunta: "¿Cuál es la partícula subatómica con carga positiva?",
        respuestas: [
            "Electrón",
            "Neutrón",
            "Positrón",
            "Protón"
        ],
        respuestaTrue: "Protón"
    },
    {
        pregunta: "¿Cuánto tiempo tarda la luz del Sol en llegar a la Tierra?",
        respuestas: [
            "Alrededor de 1 minuto.",
            "Alrededor de 24 horas.",
            "17 minutos",
            "Alrededor de 8 minutos"
        ],
        respuestaTrue: "Alrededor de 8 minutos"
        
    },
    {
        pregunta: "¿Cuál es el nombre del sistema de posicionamiento globlal por satélite europeo?",
        respuestas: [
            "GPS (Global Positioning System)",
            "GLONASS (Global Navigation Satellite System)",
            "Beidou",
            "Galileo",
        ],
        respuestaTrue: "Galileo"
    },
];

// Función para reordenar las preguntas de forma aleatoria

function randomPreguntas(arrayPreguntas){
    for (let i = arrayPreguntas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Genera un índice aleatorio entre 0 y i (inclusive)
        [arrayPreguntas[i], arrayPreguntas[j]] = [arrayPreguntas[j], arrayPreguntas[i]]; // Intercambia los elementos en las posiciones i y j
    }

    return arrayPreguntas;
};

// Función para reordenar las respuestas de cada pregunta

function randomRespuestas(arrayPreguntas, k){
    for (let i = arrayPreguntas[k].respuestas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Genera un índice aleatorio entre 0 y i (inclusive)
        [arrayPreguntas[k].respuestas[i], arrayPreguntas[k].respuestas[j]] = [arrayPreguntas[k].respuestas[j], arrayPreguntas[k].respuestas[i]]; // Intercambia los elementos en las posiciones i y j
    }
    return arrayPreguntas[k].respuestas;
};

// Función para asignar las respuestas mezcladas a cada radio button del html

function asignarRespuestas(){
    for (let i = 0; i < respuestasTest.length; i++) {
        respuestasTest[i].innerHTML = randomizedRespuestas[i];
        console.log (respuestasTest[i].innerHTML)
    }
};

// Función que verifica la respuesta marcada

function checkRespuesta(i){
    if ((document.getElementById("btnradio1").checked)&&(document.getElementById("a").innerHTML == arrayPreguntas[i].respuestaTrue)) {
        aciertos++;
    }
    if ((document.getElementById("btnradio2").checked)&&(document.getElementById("b").innerHTML == arrayPreguntas[i].respuestaTrue)) {
        aciertos++;
    }
    if ((document.getElementById("btnradio3").checked)&&(document.getElementById("c").innerHTML == arrayPreguntas[i].respuestaTrue)) {
        aciertos++;
    }
    if ((document.getElementById("btnradio4").checked)&&(document.getElementById("d").innerHTML == arrayPreguntas[i].respuestaTrue)) {
        aciertos++;
    }
    return aciertos;
};

// Función para limpiar el formulario al pasar a la siguiente pregunta

function clearRadio(){
    document.getElementsByName("btnradio").forEach(radio => {
        radio.checked = false;
    })
}

// Función que muestra una tarjeta según la cantidad de aciertos

function showAciertos(){
    switch (true) {
        case aciertos > 8:
            document.getElementById("card").className = "card text-bg-info  mb-3"
            break;
        case aciertos >=7 && aciertos <= 8:
            document.getElementById("card").className = "card text-bg-success mb-3"
            break;
        case aciertos >= 5 && aciertos < 7:
            document.getElementById("card").className = "card text-bg-warning mb-3"
            break;
        case aciertos <5:
            document.getElementById("card").className = "card text-bg-danger mb-3"
        default:
            break;
    }
    document.getElementById("aciertos").innerHTML = "¡Has acertado " +aciertos+ " preguntas!"
    document.getElementById("card").hidden = false;
};

// Funciones main de la página

const randomizedPreguntas = randomPreguntas(arrayPreguntas);
var randomizedRespuestas;
var i = 0;

// Función para avanzar en el cuestionario

function nextPregunta(){
    checkRespuesta(i);
    clearRadio();
    i++
    if (i<arrayPreguntas.length) {
        loadPregunta();
    }
    if (i == arrayPreguntas.length) {
        document.getElementById("next").disabled = true;
        showAciertos();
    };
}

//Función para mostrar las preguntas y respuestas por pantalla

function loadPregunta(){
    contador.innerHTML = i + 1 +"/10";
    contador.style = "width: " + (i + 1) + "0%";
    pregunta.innerHTML = arrayPreguntas[i].pregunta; 
    randomizedRespuestas = randomRespuestas (arrayPreguntas, i);
    asignarRespuestas();
}

